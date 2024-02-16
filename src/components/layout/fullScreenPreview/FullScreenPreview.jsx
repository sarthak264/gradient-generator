import styles from './fullScreenPreview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faShuffle } from '@fortawesome/free-solid-svg-icons';
import useStore from '../../../store';
import generateGradientString from '../../../utils/generateGradient';
import randomGradient from '../../../utils/randomGradient';

const FullScreenPreview = ({ showPreview, setShowPreview }) => {
  const {
    setRandomGradient,
    setRotation,
    setColor,
    setActiveStop,
    type,
    rotation,
    stopsArr,
  } = useStore();

  const newArr = randomGradient();

  const updateRandomGradient = () => {
    setRandomGradient(newArr);
    setRotation(90);
    setActiveStop(0);
    setColor(newArr[0].color);
  };

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
      <div
        className={`${styles.iconWrapper} ${styles.shuffleWrapper}`}
        onClick={updateRandomGradient}
      >
        <FontAwesomeIcon icon={faShuffle} className={styles.crossIcon} />
      </div>
    </div>
  );
};

export default FullScreenPreview;
