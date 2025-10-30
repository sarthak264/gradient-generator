import './fullScreenPreview.css';
import useStore from '../../../store';
import generateGradientString from '../../../utils/generateGradient';
import randomGradient from '../../../utils/randomGradient';
import { Shuffle, X } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

const FullScreenPreview = ({
  showPreview,
  setShowPreview,
}: {
  showPreview: boolean;
  setShowPreview: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    setRandomGradient,
    setRotation,
    setColor,
    setActiveStop,
    type,
    rotation,
    stopsArr,
  } = useStore();

  const newArr = randomGradient();

  const updateRandomGradient = () => {
    setRandomGradient(newArr);
    setRotation(90);
    setActiveStop(0);
    setColor(newArr[0].color);
  };

  return (
    <div
      className={`fullScreenPreview ${showPreview ? 'previewVisible' : ''}`}
      style={{
        background: `${generateGradientString(type, rotation, stopsArr)}`,
      }}
    >
      <div
        className='iconWrapper'
        onClick={() => setShowPreview((old) => !old)}
      >
        <X />
      </div>
      <div
        className='iconWrapper shuffleWrapper'
        onClick={updateRandomGradient}
      >
        <Shuffle />
      </div>
    </div>
  );
};

export default FullScreenPreview;
