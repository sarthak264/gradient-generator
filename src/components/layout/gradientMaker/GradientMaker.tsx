import { useState } from 'react';
import './gradientMaker.css';
import ControlPanel from '../controlPanel/ControlPanel';
import GradientPreview from '../gradientPreview/GradientPreview';
import FullScreenPreview from '../fullScreenPreview/FullScreenPreview';

const GradientMaker = () => {
  const [showFullPreview, setShowFullPreview] = useState(false);

  return (
    <main style={{paddingBottom: 50}}>
      <ControlPanel />
      <GradientPreview setShowFullPreview={setShowFullPreview} />
      <FullScreenPreview
        showPreview={showFullPreview}
        setShowPreview={setShowFullPreview}
      />
    </main>
  );
};

export default GradientMaker;
