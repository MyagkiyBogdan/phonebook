import { Watch } from 'react-loader-spinner';
import styles from './Spiner.module.css';

interface ISpinerProps {
  width: number;
  height: number;
  color?: string;
  isNeedMargin?: Boolean;
}

const Spiner: React.FC<ISpinerProps> = ({
  width,
  height,
  color,
  isNeedMargin = false,
}) => {
  return isNeedMargin ? (
    <span className={styles.spinerWithMargin}>
      <Watch height={width} width={height} color={color} ariaLabel="loading" />
    </span>
  ) : (
    <span className={styles.spiner}>
      <Watch height={width} width={height} color={color} ariaLabel="loading" />
    </span>
  );
};

export default Spiner;
