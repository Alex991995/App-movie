import { Button, Modal, Rating } from '@mantine/core';
import { useEffect, useState } from 'react';
import { INformationAbMovie, IforListOfMovies } from '../features/types';
import { addRatedMovies, removeRatedMovie, selectRating } from '../features/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../features/hooks/reduxHooks';

interface IModalComponent {
  opened: boolean;
  close: () => void;
  movie: IforListOfMovies | INformationAbMovie | undefined;
}

function ModalComponent({ opened, close, movie }: IModalComponent) {
  const dispatch = useAppDispatch();

  const ratedMovies = useAppSelector(selectRating);
  const [value, setValue] = useState(0);

  // useEffect(() => {
  // const rating =  ratedMovies.find(item => item.id === movie?.id);

  //   setValue( () => rating?.rating || 0);
  //   console.log(value)
  // },[movie]);

  // function name() {
  
  // }



  function storeRatedMovie() {
    if (movie) {
      const changedChosenMovie: IforListOfMovies = Object.assign({ ...movie, rating: value });
      console.log(changedChosenMovie);
      dispatch(addRatedMovies(changedChosenMovie));
    }
    setValue(0);
    close();
  }

  function removeMovie() {
    if (movie?.id) {
      dispatch(removeRatedMovie(movie?.id));
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
        <Button onClick={removeMovie} variant="subtle">
          Remove rating
        </Button>
      </Modal>
    </>
  );
}

export default ModalComponent;
