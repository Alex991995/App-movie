import { Button, Modal, Rating } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IforListOfMovies } from '../features/types';
import { addRatedMovies } from '../features/slices/moviesSlice';
import { useAppDispatch } from '../features/hooks/reduxHooks';

interface IModalComponent {
  opened: boolean;
  close: () => void;
  chosenMovie: IforListOfMovies | undefined;
}

function ModalComponent({ opened, close, chosenMovie }: IModalComponent) {
  // const [ratedMovie, setRatedMovie ] = useState()

  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);



  function storeRatedMovie() {
    if (chosenMovie) {
      const ratedMovie = { ...chosenMovie, rating: value };
     
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
