import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { menuState } from '../states/atom';

const Menu = () => {
	const menuOpened = useRecoilValue(menuState);
	console.log(menuOpened);

	return (
		<div
			className={`${
				menuOpened ? null : '-translate-x-full'
			} lg:hidden h-screen w-screen z-40 transition-all duration-300 bg-customLightPurple fixed`}
		>
			<div>Menu</div>
		</div>
	);
};

export default Menu;
