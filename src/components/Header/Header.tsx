import {format} from 'date-fns';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Todos</h1>
      <p className={styles.date}>
        {format(new Date(), 'dd MMMM yyyy')}
      </p>
    </header>
  );
}

export default Header;
