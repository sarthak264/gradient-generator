import styles from './gradientPreview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

const GradientPreview = ({ setShowFullPreview }) => {
  const gradientData = {
    type: 'linear',
    rotation: 0,
    stops: [
      { color: '#681193', position: 0 },
      { color: '#4542C9', position: 0.51 },
      { color: '#2472FC', position: 1 },
    ],
  };

  const generateGradientString = (gradientData) => {
    const gradientType =
      gradientData.type === 'radial' ? 'radial-gradient' : 'linear-gradient';
    const gradientDirection = gradientData.rotation;
    const stopsString = gradientData.stops
      .map((stop) => `${stop.color} ${stop.position * 100}%`)
      .join(', ');

    return `${gradientType}(${gradientDirection}, ${stopsString})`;
  };

  console.log(generateGradientString(gradientData));

  return (
    <div
      className={styles.preview}
      style={{ background: `${generateGradientString(gradientData)}` }}
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
