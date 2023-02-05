import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import Loading from './Loading';

const LandingPage = forwardRef(function LandingPage(props, ref) {
  const pageRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      scrollIntoView() {
        pageRef.current.scrollIntoView();
      },
    };
  });

  return (
    <div
      onLoad={() => setLoaded(true)}
      className='h-screen snap-start pt-36 bg-landing-page bg-cover bg-[0%] flex justify-center items-center'
      ref={pageRef}
    >
      <Loading loaded={loaded} />
      <div className='flex flex-row '>
        {/* <div className='w-[1000px] bg-customLightPink h-[400px]'></div> */}
        <div className='flex flex-col items-center justify-center -mb-28 space-y-5 w-[calc(100vw-5vw)]'>
          <span className='text-[4rem] leading-none'>
            YILDIZ TEKNİK ÜNİVERSİTESİ
          </span>
          <span className='text-[9rem] leading-none tracking-[0.3em] -mr-9 text-center text-customDarkPurple'>
            SKY LAB
          </span>
        </div>
        {/* <div className='flex-shrink-0 w-[700px] bg-customLightPink h-[400px]'></div> */}
      </div>
      <div className=''></div>
    </div>
  );
});

export default LandingPage;
