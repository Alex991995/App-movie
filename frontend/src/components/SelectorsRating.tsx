import { Select } from '@mantine/core';
import React, { useState } from 'react';
import { arrNumbers } from '../features/constants';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import styles from '../styles/allMovies.module.css';

interface SelectorsRatingProps {
  setRatingFrom: React.Dispatch<React.SetStateAction<string | null>>;
  setRatingTo: React.Dispatch<React.SetStateAction<string | null>>;
  ratingFrom: string | null,
  ratingTo: string | null
}

function SelectorsRating({ setRatingFrom, setRatingTo, ratingFrom, ratingTo }: SelectorsRatingProps) {
  const [focus, setFocus] = useState(false);
  return (
    <>
   
      <Select
        value={ratingFrom}
        rightSection={focus ? <IconChevronDown /> : <IconChevronUp />}
        onClick={() => setFocus(!focus)}
        onBlur={() => setFocus(false)}
        label='Rating'
        placeholder="from"
        data={arrNumbers.map(num => String(num))}
        onChange={value => setRatingFrom(value!)}
        comboboxProps={{
          transitionProps: { transition: 'pop', duration: 200 },
        }}
      />

      <Select
        value={ratingTo}
        rightSection={focus ? <IconChevronDown /> : <IconChevronUp />}
        onClick={() => setFocus(!focus)}
        onBlur={() => setFocus(false)}
        placeholder="to"
        data={arrNumbers.map(num => String(num))}
        onChange={value => setRatingTo(value!)}
        comboboxProps={{
          transitionProps: { transition: 'pop', duration: 200 },
        }}
      />

    </>
  );
}

export default SelectorsRating;
