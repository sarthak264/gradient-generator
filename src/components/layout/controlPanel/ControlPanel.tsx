import useStore from '../../../store';
import positionOptions from '../../../utils/positionOptions';
import randomGradient from '../../../utils/randomGradient';
import rotationOptions from '../../../utils/rotationOptions';
import Button from '../../ui/button/Button';
import ColorInput from '../../ui/colorInput/ColorInput';
import NumSelectBtn from '../../ui/numSelectBtn/NumSelectBtn';
import SelectBtn from '../../ui/selectBtn/SelectBtn';
import Slider from '../../ui/slider/Slider';
import './controlPanel.css';

const ControlPanel = () => {
  const {
    setRandomGradient,
    type,
    rotation,
    activeStop,
    stopsArr,
    setRotation,
    setColor,
    setShowCopyModal,
    setActiveStop,
  } = useStore();
  const newArr = randomGradient();
  const updateRandomGradient = () => {
    setRandomGradient(newArr);
    setRotation(90);
    setActiveStop(0);
    setColor(newArr[0].color);
  };
  return (
    <div className='controlPanel'>
      <Slider />
      <div className='btnsWrapper' style={{ marginBottom: '40px' }}>
        <ColorInput />
        <NumSelectBtn
          title='position'
          symbol='%'
          range={100}
          list={positionOptions}
          initialValue={stopsArr[activeStop].position}
        />
        <NumSelectBtn
          title='rotation'
          symbol='°'
          range={360}
          list={rotationOptions}
          initialValue={rotation}
        />
        <SelectBtn
          title='type'
          values={['Linear', 'Radial']}
          initialValue={type}
        />
      </div>
      <div className='btnsWrapper'>
        <Button onClick={updateRandomGradient}>
          Random
        </Button>
        <Button theme='blue' onClick={setShowCopyModal}>
          Copy CSS
        </Button>
        {/* <Button title='Random' onClick={updateRandomGradient} />
        <Button title='Copy CSS' theme='blue' onClick={setShowCopyModal} /> */}
      </div>
    </div>
  );
};

export default ControlPanel;
