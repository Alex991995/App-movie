import { Select } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { arrNumbers } from '../features/constants';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import styles from '../styles/allMovies.module.css';

interface SelectorsRatingProps {
  setRatingFrom: React.Dispatch<React.SetStateAction<string | null>>;
  setRatingTo: React.Dispatch<React.SetStateAction<string | null>>;
  ratingFrom: string | null;
  ratingTo: string | null;
  error: boolean
}

function SelectorsRating({ setRatingFrom, setRatingTo, ratingFrom, ratingTo, error }: SelectorsRatingProps) {

  
  const [focus, setFocus] = useState(false);
  

  
  return (
    <>
      <Select
        error={error && 'error'}
        radius="md"
        value={ratingFrom}
        rightSection={focus ? <IconChevronDown /> : <IconChevronUp />}
        onClick={() => setFocus(!focus)}
        onBlur={() => setFocus(false)}
        label='Rating'
        placeholder="from"
        data={arrNumbers.map(num => String(num))}
        onChange={setRatingFrom}
        comboboxProps={{
          transitionProps: { transition: 'pop', duration: 200 },
        }}
      />

      <Select
        radius="md"
        value={ratingTo}
        rightSection={focus ? <IconChevronDown /> : <IconChevronUp />}
        onClick={() => setFocus(!focus)}
        onBlur={() => setFocus(false)}
        placeholder="to"
        data={arrNumbers.map(num => String(num))}
        onChange={setRatingTo}
        comboboxProps={{
          transitionProps: { transition: 'pop', duration: 200 },
        }}
      />

    </>
  );
}

export default SelectorsRating;
