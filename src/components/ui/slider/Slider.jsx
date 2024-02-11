import { useEffect, useRef, useState } from 'react';
import useStore from '../../../store';
import styles from './slider.module.css';
import generateGradientString from '../../../utils/generateGradient';

const Slider = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const { activeStop, stopsArr, setActiveStop, type } = useStore();
  const sliderRef = useRef();

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        const width = sliderRef.current.getBoundingClientRect().width;
        setSliderWidth(width);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const calculatePosition = (position) => {
    let finalPosition = position * (sliderWidth - 30);
    if (finalPosition < 0) {
      finalPosition = 0;
    } else if (position == 1) {
      finalPosition = sliderWidth - 30;
    }
    return finalPosition;
  };

  console.log(sliderWidth);

  return (
    <div
      className={styles.slider}
      ref={sliderRef}
      style={{
        background: `${generateGradientString('Linear', 90, stopsArr)}`,
      }}
    >
      {stopsArr.map((stop, index) => (
        <div
          className={`${styles.sliderCursors} ${
            activeStop === index ? styles.activeSliderCursor : ''
          }`}
          key={index}
          style={{
            backgroundColor: stop.color,
            transform: `translate3d(${calculatePosition(
              stop.position
            )}px, -50%, 0)`,
          }}
          onClick={() => setActiveStop(index)}
        ></div>
      ))}
    </div>
  );
};

export default Slider;
