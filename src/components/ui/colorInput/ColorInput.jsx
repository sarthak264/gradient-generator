import { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import styles from './colorInput.module.css';
import useStore from '../../../store';

const ColorInput = () => {
  const { stopsArr, activeStop, setActiveColor, randomCalls } = useStore();
  const [color, setColor] = useState(stopsArr[activeStop].color);
  const [selectColor, setSelectColor] = useState(false);

  useEffect(() => {
    setColor(stopsArr[activeStop].color);
  }, [activeStop]);

  useEffect(() => setActiveColor(color), [color]);
  useEffect(() => setColor(stopsArr[activeStop].color), [randomCalls]);

  return (
    <div className={styles.colorInputWrapper}>
      <label htmlFor='color'>Color</label>
      <input
        type='text'
        name='color'
        id='color'
        className={styles.colorInput}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div
        className={styles.currentColor}
        style={{ backgroundColor: color }}
        onClick={() => {
          setSelectColor((old) => (old === null ? true : !old));
        }}
      ></div>
      {selectColor && <HexColorPicker color={color} onChange={setColor} />}
    </div>
  );
};

export default ColorInput;
