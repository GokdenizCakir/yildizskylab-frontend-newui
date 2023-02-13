import React, { useState } from 'react';
import Logo from '../assets/SkylabPinkLogo.png';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const Nav = ({ refs: { landingRef, teamsRef, eventsRef, contactRef } }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`${
        menuOpened ? 'bg-customLightPurple h-screen' : 'h-24 flex'
      } transition-colors  lg:h-36 w-full fixed top-0 flex-row items-center justify-center lg:justify-between container z-50`}
    >
      <div className='absolute w-screen h-24 flex items-center'>
        <div
          onClick={() => setMenuOpened(!menuOpened)}
          className={`${
            menuOpened ? 'left-1/2 -translate-x-1/2' : 'ml-5 left-0'
          } p-2 pb-3 transition-all duration-300 rounded-md cursor-pointer lg:hidden absolute`}
        >
          <svg
            width='28'
            height='16'
            viewBox='0 0 28 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line y1='1' x2='28' y2='1' stroke='#EADAFF' stroke-width='2' />
            <line y1='8' x2='28' y2='8' stroke='#EADAFF' stroke-width='2' />
            <line y1='15' x2='28' y2='15' stroke='#EADAFF' stroke-width='2' />
          </svg>
        </div>
      </div>

      <div
        className={` ${
          menuOpened ? 'hidden' : 'flex'
        } items-center flex-row space-x-2 lg:space-x-6`}
      >
        <div className='w-9 h-9 lg:w-10 lg:h-10'>
          <img src={Logo} alt='' />
        </div>
        <div className='hidden lg:flex w-2 h-2 rounded-full bg-customLightPink'></div>
        <div className=''>
          <span className='font-bebasNeue text-3xl lg:text-5xl tracking-[0.3em] font-light'>
            Sky Lab
          </span>
        </div>
      </div>
      <ul className='hidden lg:flex flex-row space-x-12 text-lg'>
        <li>
          <button
            className='tracking-[0.10em]'
            onClick={() => handleScroll(landingRef)}
          >
            ANASAYFA
          </button>
        </li>
        <li>
          <button
            className='tracking-[0.10em]'
            onClick={() => handleScroll(teamsRef)}
          >
            EKİPLER
          </button>
        </li>
        <li>
          <button
            className='tracking-[0.10em]'
            onClick={() => handleScroll(eventsRef)}
          >
            ETKİNLİKLER
          </button>
        </li>
        <li>
          <button
            className='tracking-[0.10em]'
            onClick={() => handleScroll(contactRef)}
          >
            İLETİŞİM
          </button>
        </li>
        <li className='text-customAccent'>
          <a href='#a' className='tracking-[0.10em]'>
            KAYIT OL/GİRİŞ YAP
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
