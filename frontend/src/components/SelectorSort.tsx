import { useEffect, useState } from 'react';
import { objSort } from '../features/constants';

import { Select } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import styles from '../styles/HomePage.module.css';

interface SelectorSortProps {
  setNameSortId: React.Dispatch<React.SetStateAction<string>>;
}

function SelectorSort({ setNameSortId }: SelectorSortProps) {
  const [focus, setFocus] = useState(false);
  const [valueSort, setValueSort] = useState<string | null>(null);

  useEffect(() => {
    objSort.forEach(item => {
      if (item.name === valueSort) setNameSortId(item.nameSort);
    });
  }, [valueSort]);

  return (
    <Select
      className={styles.sortBy}
      radius="md"
      rightSection={focus ? <IconChevronDown /> : <IconChevronUp />}
      onChange={setValueSort}
      onClick={() => setFocus(!focus)}
      onBlur={() => setFocus(false)}
      label="Sort by"
      placeholder="Pick value"
      defaultValue={objSort[0].name}
      data={objSort.map(item => item.name)}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}

export default SelectorSort;
