export const objSort = [
  {
    name: 'Most Popular',
    nameSort: 'popularity.desc',
  },
  {
    name: 'Least Popular',
    nameSort: 'popularity.asc',
  },
  {
    name: 'Most Rated' ,
    nameSort: 'vote_average.desc',
  },
  {
    name: 'Least Rated',
    nameSort: 'vote_average.asc',
  },
  {
    name: 'Most Voted',
    nameSort: 'vote_count.desc',
  },
  {
    name: 'Least Voted',
    nameSort: 'vote_count.asc',
  },
  {
    name: 'Most Release Date',
    nameSort: 'release_date.desc',
  },
  {
    name: 'Least Release Date',
    nameSort: 'release_date.acs',
  },
  {
    name: 'Most Profitable',
    nameSort: 'revenue.desc',
  },
  {
    name: 'Least Profitable',
    nameSort: 'revenue.asc',
  },
  {
    name: 'Most Primary Release Date',
    nameSort: 'primary_release_date.desc',
  },
  {
    name: 'Least Primary Release Date',
    nameSort: 'primary_release_date.asc',
  },
  {
    name: 'Sort alphabetically (Most)',
    nameSort: 'original_title.desc',
  },
  {
    name: 'Sort alphabetically (Least) ',
    nameSort: 'original_title.asc',
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
