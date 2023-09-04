
import { IFilter } from '../../types';
import styles from './Filter.module.css';

interface FilterProps {
  onFilterChange: (filter: IFilter) => void;
}

function Filter({onFilterChange}: FilterProps) {
  return (
    <div>
      <button onClick={() => onFilterChange('all')}>Все</button>
      <button onClick={() => onFilterChange('completed')}>Выполненные</button>
      <button onClick={() => onFilterChange('uncompleted')}>Невыполненные</button>
    </div>
  );
}

export default Filter;
