import './gradientPreview.css';
import useStore from '../../../store';
import generateGradientString from '../../../utils/generateGradient';
import { Maximize } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

const GradientPreview = ({
  setShowFullPreview,
}: {
  setShowFullPreview: Dispatch<SetStateAction<boolean>>;
}) => {
  const { type, rotation, stopsArr } = useStore();

  return (
    <div
      className='preview'
      style={{
        background: `${generateGradientString(type, rotation, stopsArr)}`,
      }}
    >
      <Maximize
        size={24}
        className='fullscreen'
        onClick={() => setShowFullPreview((old) => !old)}
      />
    </div>
  );
};

export default GradientPreview;
