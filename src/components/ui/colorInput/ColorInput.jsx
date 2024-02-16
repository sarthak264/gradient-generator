import { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import styles from './colorInput.module.css';
import useStore from '../../../store';

const ColorInput = () => {
  const { stopsArr, activeStop, setColor, randomCalls, removeStop } =
    useStore();
  const [localColor, setLocalColor] = useState(stopsArr[activeStop].color);
  const [selectColor, setSelectColor] = useState(false);

  useEffect(() => {
    setLocalColor(stopsArr[activeStop].color);
  }, [activeStop]);

  useEffect(() => setColor(localColor), [localColor]);
  useEffect(() => setLocalColor(stopsArr[activeStop].color), [randomCalls]);

  return (
    <div className={styles.colorInputWrapper}>
      <label htmlFor='color' className={styles.colorInputLabel}>
        Color
        {stopsArr.length > 2 && (
          <span
            className={styles.removeBtn}
            onClick={() => removeStop(activeStop)}
          >
            Remove
          </span>
        )}
      </label>
      <input
        type='text'
        name='color'
        id='color'
        className={styles.colorInput}
        value={localColor}
        onChange={(e) => setLocalColor(e.target.value)}
      />
      <div
        className={styles.currentColor}
        style={{ backgroundColor: localColor }}
        onClick={() => {
          setSelectColor((old) => (old === null ? true : !old));
        }}
      ></div>
      {selectColor && (
        <HexColorPicker color={localColor} onChange={setLocalColor} />
      )}
    </div>
  );
};

export default ColorInput;
