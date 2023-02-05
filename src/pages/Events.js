import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import DownArrow from '../components/DownArrow';
import dashedLine from './../assets/dashedLine.png';
import events from './../data/events.json';

const Events = forwardRef(function Events(props, ref) {
  const [selectEvent, setSelectEvent] = useState(0);

  const pageRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollIntoView() {
        pageRef.current.scrollIntoView();
      },
    };
  });

  return (
    
    <section
      className='snap-start relative bg-customDarkPurple pt-36'
      ref={pageRef}
    >
      <title className='w-screen flex justify-center mt-10 mb-24'>
        <h2 className='text-customAccent text-5xl'>GELECEK ETKİNLİKLER</h2>
      </title>
      <div className='overflow-y-hidden relative'>
        <div className='absolute left-1/2 -translate-x-1/2 mt-14 mb-36'>
          <img src={dashedLine} alt='line' />
        </div>
        {events.map((event, index) => {
          return (
            <div
              key={index}
              className={`w-screen flex ${
                index % 2 === 0 ? null : 'flex-row-reverse'
              } mb-16 mt-2`}
            >
              <div
                className={`w-1/2 flex ${
                  index % 2 === 0 ? null : 'flex-row-reverse'
                } justify-end`}
              >
                <div
                  className={`${index % 2 === 0 ? 'mr-6' : 'ml-8'} w-[26rem]`}
                >
                  <div className='flex justify-end text-5xl'>
                    <span className='text-customLightPurple mr-6'>
                      {event.date}
                    </span>
                    <span
                      className={`${
                        index === selectEvent
                          ? 'text-customAccent'
                          : 'text-customLightPink'
                      }`}
                    >
                      {event.name}
                    </span>
                  </div>
                  <p
                    className={`mt-2 text-ellipsis ${
                      index === selectEvent ? null : 'whitespace-nowrap'
                    } overflow-x-hidden`}
                  >
                    {event.description}
                  </p>
                </div>
                <div
                  onClick={() => setSelectEvent(index)}
                  className={`${
                    index === selectEvent
                      ? 'w-[8.5rem] h-[8.5rem] ring-8'
                      : 'w-[5rem] h-[5rem] mx-10'
                  } ${
                    index === selectEvent
                      ? index % 2 === 0
                        ? 'ml-6'
                        : 'mr-6'
                      : null
                  } rounded-[50%] z-10 transition-all duration-700 cursor-pointer ring-customAccent bg-customLightPink`}
                ></div>
              </div>

              <div className='w-1/2'></div>
            </div>
          );
        })}
      </div>
      <div className='h-36'></div>
      {/* <DownArrow /> */}
    </section>
  );
});

export default Events;
