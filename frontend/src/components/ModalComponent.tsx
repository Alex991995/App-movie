import { Button, Modal, Rating } from '@mantine/core';
import { useState } from 'react';
import { IforListOfMovies } from '../features/types';
import { addRatedMovies, removeRatedMovie } from '../features/slices/moviesSlice';
import { useAppDispatch } from '../features/hooks/reduxHooks';

interface IModalComponent {
  opened: boolean;
  close: () => void;
  chosenMovie: IforListOfMovies | undefined;
  
}

function ModalComponent({ opened, close, chosenMovie }: IModalComponent) {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);

  function storeRatedMovie() {
    if (chosenMovie) {
      const changedChosenMovie: IforListOfMovies = Object.assign({ ...chosenMovie, rating: value });
      console.log(changedChosenMovie);
      dispatch(addRatedMovies(changedChosenMovie));
    }
    setValue(0);
    close();
  }
  

  function removeMovie() {
    if(chosenMovie?.id) {
       dispatch(removeRatedMovie(chosenMovie?.id))
    }
    setValue(0);
    close();
  }

  return (
    <>
      <Modal opened={opened} onClose={close}>
        <Rating defaultValue={value} onChange={setValue} size={28} count={10} />
        <Button color="#9854F6" onClick={storeRatedMovie}>
          Save
        </Button>
        <Button onClick={removeMovie} variant="subtle">Remove rating</Button>
      </Modal>
    </>
  );
}

export default ModalComponent;
