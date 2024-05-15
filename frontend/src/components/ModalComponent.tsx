import { Button, Modal, Rating } from '@mantine/core';
import { useState } from 'react';
import { IforListOfMovies } from '../features/types';
import { addRatedMovies } from '../features/slices/moviesSlice';
import { useAppDispatch } from '../features/hooks/reduxHooks';

interface IModalComponent {
  opened: boolean;
  close: () => void;
  chosenMovie: IforListOfMovies | undefined;
  colorStar: string;
}

function ModalComponent({ opened, close, chosenMovie, colorStar }: IModalComponent) {
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

  return (
    <>
      <Modal opened={opened} onClose={close}>
        <Rating value={value} onChange={setValue} size={28} count={10} />
        <Button color="#9854F6" onClick={storeRatedMovie}>
          Save
        </Button>
        <Button variant="subtle">Remove rating</Button>
      </Modal>
    </>
  );
}

export default ModalComponent;
