import React from 'react';
import { pagesCutting, range } from '../helpers/functionHelpers';
import styles from '../styles/Pagination.module.css';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface PaginationComponentProps {
  allPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function PaginationComponent({ allPages, page, setPage }: PaginationComponentProps) {
  const getPagesCut = pagesCutting(allPages, page);
  const numberPages = range(getPagesCut.start, getPagesCut.end);
  function previousPage() {
    setPage(prev => prev - 1);
  }

  function fetchSpecificPage(page: number) {
    setPage(page);
  }
  function nextPage() {
    setPage(prev => prev + 1);
  }

  return (
    <div className={styles.wrapperPagination}>
      <button disabled={page === 1 && true} className={styles.button} onClick={previousPage}>
        <IconChevronLeft color={page === 1 ? '#D5D6DC ' : '#7B7C88'} size={16} />
      </button>
      {numberPages.map(p => (
        <button
          key={p}
          className={p === page ? styles.activePage : styles.button}
          onClick={() => fetchSpecificPage(p)}
        >
          {p}
        </button>
      ))}
      <button disabled={page === allPages && true} className={styles.button} onClick={nextPage}>
        <IconChevronRight color="#7B7C88" size={16} />
      </button>
    </div>
  );
}

export default PaginationComponent;
