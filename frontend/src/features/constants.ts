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
    name: 'Most Rated',
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

const currentDate = new Date();
const year = currentDate.getFullYear();

for (let i = year; i > 0; i--) {
  years.push(i);
}

for (let i = 1; i <= 10; i++) {
  arrNumbers.push(i);
}

type months = {
  number: string;
  month: string;
};

export const months: months[] = [
  {
    number: '01',
    month: 'January',
  },
  {
    number: '02',
    month: 'February',
  },
  {
    number: '03',
    month: 'March',
  },
  {
    number: '04',
    month: 'April',
  },
  {
    number: '05',
    month: 'May',
  },
  {
    number: '06',
    month: 'June',
  },
  {
    number: '07',
    month: 'July',
  },
  {
    number: '08',
    month: 'August',
  },
  {
    number: '09',
    month: 'September',
  },
  {
    number: '10',
    month: 'October',
  },
  {
    number: '11',
    month: 'November',
  },
  {
    number: '12',
    month: 'December',
  },
];
