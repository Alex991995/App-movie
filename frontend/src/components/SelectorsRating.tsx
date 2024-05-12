import { Select } from '@mantine/core';
import React, { useState } from 'react';
import { arrNumbers } from '../features/constants';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import styles from '../styles/allMovies.module.css';

interface SelectorsRatingProps {
  setRatingFrom: React.Dispatch<React.SetStateAction<string>>;
  setRatingTo: React.Dispatch<React.SetStateAction<string>>;
}

function SelectorsRating({ setRatingFrom, setRatingTo }: SelectorsRatingProps) {
  const [focus, setFocus] = useState(false);
  return (
    <>
   
      <Select
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
