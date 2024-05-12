export const objSort = [
  {
    name: 'Most Popular',
    nameSort: 'popularity.asc',
  },
  {
    name: 'Least Popular',
    nameSort: 'popularity.desc',
  },
  {
    name: 'Most Rated',
    nameSort: 'vote_average.asc',
  },
  {
    name: 'Least Rated',
    nameSort: 'vote_average.desc',
  },
  {
    name: 'Most Voted',
    nameSort: 'vote_count.asc',
  },
  {
    name: 'Least Voted',
    nameSort: 'vote_count.desc',
  },
  {
    name: 'Most Release Date',
    nameSort: 'release_date.asc',
  },
  {
    name: 'Least Release Date',
    nameSort: 'release_date.desc',
  },
  {
    name: 'Most Profitable',
    nameSort: 'revenue.asc',
  },
  {
    name: 'Least Profitable',
    nameSort: 'revenue.desc',
  },
  {
    name: 'Most Primary Release Date',
    nameSort: 'primary_release_date.asc',
  },
  {
    name: 'Least Primary Release Date',
    nameSort: 'primary_release_date.desc',
  },
  {
    name: 'Sort alphabetically (Most)',
    nameSort: 'original_title.asc',
  },
  {
    name: 'Sort alphabetically (Least) ',
    nameSort: 'original_title.desc',
  },
];

export const years: number[] = [];
export const arrNumbers: number[] = [];

for (let i = 1950; i <= 2024; i++) {
  years.push(i);
}

for (let i = 1; i <= 10; i++) {
  arrNumbers.push(i);
}
