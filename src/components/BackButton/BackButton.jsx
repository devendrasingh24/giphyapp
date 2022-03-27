import { useHistory } from 'react-router-dom';
import styles from './BackButton.module.css';

export const BackButton = () => {
  const history = useHistory();
  return (
    <button
      className={styles.backButton}
      onClick={() => history.goBack()}
      title='go back'
    >
      {'<'}
    </button>
  );
};