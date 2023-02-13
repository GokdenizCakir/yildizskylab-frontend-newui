import React from 'react';
import Logo from '../assets/SkylabPinkLogo.png';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const Nav = ({ refs: { landingRef, teamsRef, eventsRef, contactRef } }) => {
	const handleScroll = ref => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='h-24 lg:h-36 w-full fixed top-0 flex flex-row items-center justify-center lg:justify-between container z-50'>
			<div className='ml-5 left-0 lg:hidden absolute'>
				menu
			</div>
			<div className='flex items-center flex-row space-x-2 lg:space-x-6'>
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
					<a href='#' className='tracking-[0.10em]'>
						KAYIT OL/GİRİŞ YAP
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
