import { SortByType } from '../store/filters/types';

const sorts: SortByType[] = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' }
];

export default sorts;
