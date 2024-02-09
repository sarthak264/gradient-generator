import styles from './fullScreenPreview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import useStore from '../../../store';
import generateGradientString from '../../../utils/generateGradient';

const FullScreenPreview = ({ showPreview, setShowPreview }) => {
  const { type, rotation, stopsArr } = useStore();
  return (
    <div
      className={`${styles.fullScreenPreview} ${
        showPreview ? styles.previewVisible : ''
      }`}
      style={{
        background: `${generateGradientString(type, rotation, stopsArr)}`,
      }}
    >
      <div
        className={styles.iconWrapper}
        onClick={() => setShowPreview((old) => !old)}
      >
        <FontAwesomeIcon icon={faXmark} className={styles.crossIcon} />
      </div>
    </div>
  );
};

export default FullScreenPreview;
