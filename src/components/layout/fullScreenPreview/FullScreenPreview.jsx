import styles from './fullScreenPreview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const FullScreenPreview = ({ showPreview, setShowPreview }) => {
  return (
    <div
      className={`${styles.fullScreenPreview} ${
        showPreview ? styles.previewVisible : ''
      }`}
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
