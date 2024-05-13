import { Select } from '@mantine/core';
import { useState } from 'react';
import { years } from '../features/constants';

interface SelectorYearProps {
  setValueYear: React.Dispatch<React.SetStateAction<string | null>>;
  year: string | null;
}

function SelectorYear({ setValueYear, year }: SelectorYearProps) {
  const [focus, setFocus] = useState(false);

  return (
    <Select
      radius="md"
      value={year}
      onChange={value => setValueYear(value!)}
      onClick={() => setFocus(!focus)}
      onBlur={() => setFocus(false)}
      label="Release year"
      placeholder="Select release year"
      data={years.map(item => String(item))}
    />
  );
}

export default SelectorYear;
