import React from 'react';

const LandingPage = () => {
	return (
		<div className='h-screen pt-36 bg-landing-page bg-cover bg-[0%] flex justify-center items-center'>
			<div className='flex flex-row overflow-x-scroll overflow-clip px-12'>
				<div className='flex-shrink-0 w-[700px] bg-customLightPink h-[400px] '></div>
				<div className='flex flex-col items-center justify-center -mb-28 space-y-5 w-[calc(100vw-5vw)] translate-x-0.5 flex-shrink-0'>
					<span className='text-[4rem] leading-none'>
						YILDIZ TEKNİK ÜNİVERSİTESİ
					</span>
					<span className='text-[9rem] leading-none tracking-[0.3em] -mr-9 text-center text-customDarkPurple'>
						SKY LAB
					</span>
				</div>
				<div className='flex-shrink-0 w-[700px] bg-customLightPink h-[400px]'></div>
			</div>
			<div className=''></div>
		</div>
	);
};

export default LandingPage;
