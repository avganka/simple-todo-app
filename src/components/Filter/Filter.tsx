import {IFilter} from '../../types';
import Button from '../Button/Button';
import styles from './Filter.module.css';

interface FilterProps {
  filter: IFilter;
  onFilterChange: (filter: IFilter) => void;
}

function Filter({filter, onFilterChange}: FilterProps) {
  return (
    <div className={styles.filter}>
      <Button
        className={filter === 'all' ? `${styles.button} ${styles.active}` : styles.button}
        onClick={() => onFilterChange('all')}
      >
        All
      </Button>
      <Button
        className={filter === 'completed' ? `${styles.button} ${styles.active}` : styles.button}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </Button>
      <Button
        className={filter === 'uncompleted' ? `${styles.button} ${styles.active}` : styles.button}
        onClick={() => onFilterChange('uncompleted')}
      >
        Uncompleted
      </Button>
    </div>
  );
}

export default Filter;
