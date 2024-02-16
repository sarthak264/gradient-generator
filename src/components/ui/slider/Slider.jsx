import { useEffect, useRef, useState } from 'react';
import useStore from '../../../store';
import styles from './slider.module.css';
import generateGradientString from '../../../utils/generateGradient';
import calculateColorAtPosition from '../../../utils/calculateColorAtPosition';

const Slider = () => {
  const [sliderDimensions, setSliderDimensions] = useState(0);
  const {
    activeStop,
    stopsArr,
    setActiveStop,
    addStop,
    setPosition,
    draggable,
    setDraggable,
  } = useStore();
  const sliderRef = useRef(null);
  const activeCursorRef = useRef(null);

  useEffect(() => {
    const updateSliderPositionInfo = () => {
      if (sliderRef.current) {
        const sliderDimen = sliderRef.current.getBoundingClientRect();
        setSliderDimensions(sliderDimen);
      }
    };
    updateSliderPositionInfo();
    window.addEventListener('resize', updateSliderPositionInfo);

    return () => {
      window.removeEventListener('resize', updateSliderPositionInfo);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      dragCursor(e);
    };

    const handleMouseUp = () => {
      setDraggable(false);
    };

    if (draggable) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggable]);

  const calculateCursorPosition = (position) => {
    let finalPosition = position * (sliderDimensions.width - 30);
    if (finalPosition < 0) {
      finalPosition = 0;
    } else if (position == 1) {
      finalPosition = sliderDimensions.width - 30;
    }
    return finalPosition;
  };

  const addNewStop = (e) => {
    const x = e.clientX - sliderDimensions.x;
    if (sliderRef.current) {
      let stopPosition = x / sliderDimensions.width;
      stopPosition = stopPosition.toFixed(2);

      const newStopColor = calculateColorAtPosition(stopsArr, stopPosition);
      addStop(newStopColor, stopPosition);
    }
  };

  const dragCursor = (e) => {
    const x = e.clientX;
    if (draggable && activeCursorRef.current) {
      const cursorDimensions = activeCursorRef.current.getBoundingClientRect();
      if (
        x >= sliderDimensions.x &&
        x <= sliderDimensions.x + sliderDimensions.width
      ) {
        let newPosition = x - sliderDimensions.x - cursorDimensions.width / 2;
        newPosition = newPosition < 0 ? 0 : newPosition;
        newPosition =
          newPosition > sliderDimensions.width - 30
            ? sliderDimensions.width - 30
            : newPosition;
        activeCursorRef.current.style.transform = `translate3d(${newPosition}px, -50%, 0)`;
        setPosition(calculatePositionValue(newPosition));
      }
    }
  };

  const calculatePositionValue = (x) => {
    let stopPosition = x / (sliderDimensions.width - 15);
    stopPosition = stopPosition.toFixed(2);

    return stopPosition;
  };

  return (
    <div
      className={styles.slider}
      ref={sliderRef}
      style={{
        background: `${generateGradientString('Linear', 90, stopsArr)}`,
      }}
      onClick={(e) => addNewStop(e)}
    >
      {stopsArr.map((stop, index) => (
        <div
          className={`${styles.sliderCursors} ${
            activeStop === index ? styles.activeSliderCursor : ''
          }`}
          key={index}
          ref={activeStop === index ? activeCursorRef : null}
          style={{
            backgroundColor: stop.color,
            transform: `translate3d(${calculateCursorPosition(
              stop.position
            )}px, -50%, 0)`,
          }}
          onClick={(e) => {
            setActiveStop(index);
            e.stopPropagation();
          }}
          onMouseDown={() => {
            setDraggable(true);
            setActiveStop(index);
          }}
          onTouchStart={() => {
            setDraggable(true);
            setActiveStop(index);
          }}
          onMouseMove={(e) => dragCursor(e)}
          onTouchMove={(e) => dragCursor(e.touches[0])}
          onMouseUp={() => setDraggable(false)}
          onTouchEnd={() => setDraggable(false)}
        ></div>
      ))}
    </div>
  );
};

export default Slider;
