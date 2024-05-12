import { Select } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { objSort } from '../features/constants';
import styles from '../styles/allMovies.module.css';

interface SelectorSortProps {
  setNameSortId: React.Dispatch<React.SetStateAction<string>>;
}

function SelectorSort({ setNameSortId }: SelectorSortProps) {
  const [focus, setFocus] = useState(false);
  const [valueSort, setValueSort] = useState<string | null>('');

  useEffect(() => {
    objSort.forEach(item => {
      if (item.name === valueSort) setNameSortId(item.nameSort);
    });
  }, [valueSort]);

  return (
    <Select
      className={styles.sortBy}
    
      rightSection={focus ? <IconChevronDown /> : <IconChevronUp />}
      onChange={setValueSort}
      onClick={() => setFocus(!focus)}
      onBlur={() => setFocus(false)}
      label="Sort by"
      placeholder="Pick value"
      data={objSort.map(item => item.name)}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}

export default SelectorSort;