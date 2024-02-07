import { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import styles from './colorInput.module.css';

const ColorInput = () => {
  const [color, setColor] = useState('#aabbcc');
  const [selectColor, setSelectColor] = useState(false);

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
