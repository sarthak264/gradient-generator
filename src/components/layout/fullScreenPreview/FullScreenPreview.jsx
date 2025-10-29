import styles from './fullScreenPreview.module.css';
import useStore from '../../../store';
import generateGradientString from '../../../utils/generateGradient';
import randomGradient from '../../../utils/randomGradient';
import { Shuffle, X } from 'lucide-react';

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
        <X />
      </div>
      <div
        className={`${styles.iconWrapper} ${styles.shuffleWrapper}`}
        onClick={updateRandomGradient}
      >
        <Shuffle />
      </div>
    </div>
  );
};

export default FullScreenPreview;
