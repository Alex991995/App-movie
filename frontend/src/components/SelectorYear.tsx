import { Select } from '@mantine/core';
import { useState } from 'react';
import { years } from '../features/constants';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

interface SelectorYearProps {
  setValueYear: React.Dispatch<React.SetStateAction<string>>;
}

function SelectorYear({ setValueYear }: SelectorYearProps) {
  const [focus, setFocus] = useState(false);
  return (
    <Select
      rightSection={focus ? <IconChevronDown /> : <IconChevronUp />}
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
