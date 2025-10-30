import useStore from '../../../store';
import './copyModal.css';
import generateCode from '../../../utils/generateCode';
import Button from '../../ui/button/Button';
import { toast } from 'sonner';
import { X } from 'lucide-react';

const CopyModal = () => {
  const { showCopyModal, setShowCopyModal, type, rotation, stopsArr } =
    useStore();

  const gradientCode = generateCode(type, rotation, stopsArr);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(gradientCode)
      .then(() => {
        toast('Copied to the clipboard!', { duration: 2000 });
      })
      .catch((error) => {
        toast(`Failed to copy: ${error}`, { duration: 2000 });
      });
  };

  function downloadCSS(cssContent: string, fileName: string) {
    console.log('download css');
    const blob = new Blob([cssContent], { type: 'text/css' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className={`modalWrapper ${showCopyModal ? 'visibleWrapper' : ''}`}>
      <div className={`modalContainer ${showCopyModal ? 'isVisible' : ''}`}>
        <div className={`modal ${showCopyModal ? 'modalVisible' : ''}`}>
          <div className='modalHeader'>
            <p>Gradient CSS</p>
            <div className='closeBtn' onClick={setShowCopyModal}>
              <X />
            </div>
          </div>
          <div className='modalBody'>
            <div className='codeWrapper'>
              {gradientCode.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
          <div className='modalFooter'>
            <Button
              title='Download'
              onClick={() => downloadCSS(gradientCode, 'gradient')}
            />
            <Button title='Copy' theme='blue' onClick={copyToClipboard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyModal;
