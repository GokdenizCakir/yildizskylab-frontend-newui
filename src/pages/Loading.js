import { useEffect, useState } from 'react';
import logo from './../assets/SkylabPinkLogo.png';

const Loading = ({ loaded }) => {
  const [progress, setProgress] = useState('w-[0%]');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setProgress('w-[90%]');
  }, []);

  const handleLoad = () => {
    if (progress === 'w-[100%]') {
      setVisible(false);
      clearInterval(checkIfLoaded);
    }
    if (loaded) {
      setProgress('w-[100%]');
    }
  };

  const checkIfLoaded = setInterval(handleLoad, 1000);

  return (
    <section
      className={`${
        visible ? 'flex' : 'hidden'
      } h-screen w-screen top-0 left-0 fixed justify-center items-center bg-customDarkPurple z-50`}
    >
      <div className='w-80 flex flex-col items-center'>
        <img className='w-24' src={logo} alt='logo' />
        <div className='w-full h-1 mt-6 bg-customLightPurple'>
          <div
            className={`${progress} h-full transition-all ease-out duration-[1800ms] bg-customLightPink`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
