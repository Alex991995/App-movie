import { Button, Divider, Modal, Rating } from '@mantine/core';
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

  useEffect(() => {
    const rating = ratedMovies.find(item => item.id === movie?.id);
    if (rating?.rating) setValue(rating.rating);
    else setValue(0);
  }, [opened]);

  function storeRatedMovie() {
    if (movie && value) {
      const changedChosenMovie: IforListOfMovies = Object.assign({ ...movie, rating: value });
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
      <Modal title={'Your rating'} radius="md" opened={opened} onClose={close}>
        <Divider px={0} />
        <div>
          <h3>{movie?.original_title}</h3>
          <Rating
            style={{ justifyContent: 'space-between' }}
            w="100%"
            value={value}
            onChange={setValue}
            size="xl"
            count={10}
            mb={16}
          />
          <Button radius="md" color="#9854F6" onClick={storeRatedMovie}>
            Save
          </Button>
          <Button color="#9854F6" onClick={removeMovie} variant="subtle">
            Remove rating
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ModalComponent;
