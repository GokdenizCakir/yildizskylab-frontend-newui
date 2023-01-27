import React from 'react';
import Logo from '../assets/SkylabPinkLogo.png';

const Nav = () => {
	return (
		<div className='h-36 w-full fixed top-0 flex flex-row items-center justify-between container '>
			<div className='flex items-center flex-row space-x-6'>
				<div className='w-10 h-10'>
					<img src={Logo} alt='' />
				</div>
				<div className='w-2 h-2 rounded-full bg-customLightPink'></div>
				<div className=''>
					<span className='font-bebasNeue text-5xl tracking-[0.3em] font-light'>
						Sky Lab
					</span>
				</div>
			</div>
			<ul className='flex flex-row space-x-12 text-lg tracking-[0.16em]'>
				<li>
					<span>ANASAYFA</span>
				</li>
				<li>
					<span>EKİPLER</span>
				</li>
				<li>
					<span>ETKİNLİKLER</span>
				</li>
				<li>
					<span>İLETİŞİM</span>
				</li>
				<li className='text-customAccent'>
					<span>KAYIT OL/GİRİŞ YAP</span>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
