import styles from './gradientPreview.module.css';
import useStore from '../../../store';
import generateGradientString from '../../../utils/generateGradient';
import { Maximize } from 'lucide-react';

const GradientPreview = ({ setShowFullPreview }) => {
  const { type, rotation, stopsArr } = useStore();

  return (
    <div
      className={styles.preview}
      style={{
        background: `${generateGradientString(type, rotation, stopsArr)}`,
      }}
    >
      <Maximize
        size={24}
        className={styles.fullscreen}
        onClick={() => setShowFullPreview((old) => !old)}
      />
    </div>
  );
};

export default GradientPreview;
