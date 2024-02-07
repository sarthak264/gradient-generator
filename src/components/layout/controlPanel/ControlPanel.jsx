import positionOptions from '../../../utils/positionOptions';
import rotationOptions from '../../../utils/rotationOptions';
import Button from '../../ui/button/Button';
import ColorInput from '../../ui/colorInput/ColorInput';
import NumSelectBtn from '../../ui/numSelectBtn/NumSelectBtn';
import SelectBtn from '../../ui/selectBtn/SelectBtn';
import styles from './controlPanel.module.css';

const ControlPanel = () => {
  return (
    <div className={styles.controlPanel}>
      <div className={styles.slider}>
        <div className={styles.sliderCursors}></div>
      </div>
      <div className={styles.btnsWrapper} style={{ marginBottom: '40px' }}>
        <ColorInput />
        <NumSelectBtn
          title='position'
          symbol='%'
          range={100}
          list={positionOptions}
        />
        <NumSelectBtn
          title='rotation'
          symbol='°'
          range={360}
          list={rotationOptions}
        />
        <SelectBtn title='type' values={['Linear', 'Radial']} />
      </div>
      <div className={styles.btnsWrapper}>
        <Button title='Random' />
        <Button title='Copy CSS' theme='blue' />
      </div>
    </div>
  );
};

export default ControlPanel;
