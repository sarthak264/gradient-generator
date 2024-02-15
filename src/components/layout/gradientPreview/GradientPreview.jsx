import styles from './gradientPreview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import useStore from '../../../store';
import generateGradientString from '../../../utils/generateGradient';

const GradientPreview = ({ setShowFullPreview }) => {
  const { type, rotation, stopsArr } = useStore();

  return (
    <div
      className={styles.preview}
      style={{
        background: `${generateGradientString(type, rotation, stopsArr)}`,
      }}
    >
      <FontAwesomeIcon
        icon={faUpRightAndDownLeftFromCenter}
        className={styles.fullscreen}
        onClick={() => setShowFullPreview((old) => !old)}
      />
    </div>
  );
};

export default GradientPreview;
