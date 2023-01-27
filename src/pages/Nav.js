import React from 'react';

const Nav = () => {
	return (
		<div className='h-36 w-full bg-white fixed top-0 flex flex-row items-center justify-between'>
			<div className='flex items-center flex-row'>
				<div className='w-12 h-12'>
					<img src='../assets/4_5953887805510782338.png' alt='' />
				</div>
				<div className='w-2 h-2 rounded-full bg-black'></div>
				<div className=''>
					<span className='font-bebasNeue'>Sky Lab</span>
				</div>
			</div>
			<ul className='flex flex-row space-x-12'>
				<li>
					<span>Anasayfa</span>
				</li>
				<li>
					<span>Ekipler</span>
				</li>
				<li>
					<span>Etkinlikler</span>
				</li>
				<li>
					<span>İletişim</span>
				</li>
				<li>
					<span>Kayıt Ol/Giriş Yap</span>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
