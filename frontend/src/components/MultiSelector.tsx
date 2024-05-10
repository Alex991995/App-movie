import { MultiSelect } from '@mantine/core';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../features/hooks/reduxHooks';
import { selectGenres } from '../features/slices/genresSlice';
import { fetchGenres } from '../features/slices/acyncThunck';

interface MultiSelectorProps{
  setGenres:  React.Dispatch<React.SetStateAction<string[]>>
}

function MultiSelector({setGenres}:MultiSelectorProps) {

  const genres = useAppSelector(selectGenres)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchGenres())
  },[])

  console.log(genres)
  return (
    <MultiSelect
      onChange={setGenres}
      label="Genre"
      placeholder="Select genre"
      data={genres?.genres.map(item => item.name)}
    />
  );
}

export default MultiSelector;
