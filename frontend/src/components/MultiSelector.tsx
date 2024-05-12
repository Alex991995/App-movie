import { MultiSelect } from '@mantine/core';
import React, { LegacyRef, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../features/hooks/reduxHooks';
import { fetchGenres } from '../features/slices/acyncThunck';
import { selectGenres } from '../features/slices/genresSlice';
import { IconChevronUp, IconChevronDown } from '@tabler/icons-react';
interface MultiSelectorProps {
  setGenresId: React.Dispatch<React.SetStateAction<number[]>>;
}

function MultiSelector({ setGenresId }: MultiSelectorProps) {
  const [genres, setGenres] = useState<string[] | undefined>([]);
  const [focus, setFocus ] = useState(false)
  const storeGenres = useAppSelector(selectGenres);
  const dispatch = useAppDispatch();
 


 
  useEffect(() => {
    const arrId: number[] = [];
    storeGenres?.genres.forEach(item => {
      if (genres?.includes(item.name)) arrId.push(item.id);
    });
    setGenresId(arrId);
  }, [genres]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <MultiSelect
      onChange={setGenres}
      rightSection={focus ? <IconChevronDown/> : <IconChevronUp/>}
      onClick={()=>setFocus(!focus)}
      onBlur={()=>setFocus(false)}
      label="Genre"
      hidePickedOptions
      maxValues={4}
      placeholder={genres?.length ? "" : 'Select genre'}
      data={storeGenres?.genres.map(item => item.name)}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}

export default MultiSelector;
