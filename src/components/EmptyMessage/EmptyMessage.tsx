import styles from './EmptyMessage.module.css';

const EmptyMessage: React.FC = () => (
  <p className={styles.text}>Your contacts list is empty</p>
);

export default EmptyMessage;
