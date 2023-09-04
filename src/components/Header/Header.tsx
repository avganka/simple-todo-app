import {format} from 'date-fns';
import ru from 'date-fns/locale/ru';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.date}>
        {format(new Date(), 'dd MMMM yyyy', {
          locale: ru,
        })}
      </p>
    </header>
  );
}

export default Header;
