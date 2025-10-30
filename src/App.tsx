import Header from './components/layout/header/Header';
import Navbar from './components/layout/navbar/Navbar';
import GradientMaker from './components/layout/gradientMaker/GradientMaker';
import CopyModal from './components/layout/copyModal/CopyModal';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <GradientMaker />
      <CopyModal />
      <Toaster
        position='bottom-center'
        toastOptions={{
          style: {
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

export default App;
