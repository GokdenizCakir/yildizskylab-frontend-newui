import React, { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
		fullname: '',
		email: '',
		GSM: '',
		message: '',
	});

	const handleChange = e => {
		const newData = { ...formData };
		newData[e.target.name] = e.target.value;
		setFormData(newData);
	};

	const handleSubmit = e => {
		e.preventDefault();

		///////////////////////////////////////
		//   Fetch with req.body = newData   //
		///////////////////////////////////////

		console.log(formData);
		setFormData({
			fullname: '',
			email: '',
			GSM: '',
			message: '',
		});
	};

	return (
		<section className='h-screen pt-36 bg-customDarkPurple'>
			<div className='flex flex-col items-center mt-4 mx-auto w-[32rem]'>
				<h1 className='text-6xl'>BİZE ULAŞIN</h1>
				<form
					className='w-full font-inter font-medium pt-12'
					onSubmit={handleSubmit}
				>
					<input
						onChange={e => handleChange(e)}
						value={formData.fullname}
						name='fullname'
						type='text'
						placeholder='İsim Soyisim'
						className='w-full'
					/>
					<input
						onChange={e => handleChange(e)}
						value={formData.email}
						name='email'
						type='email'
						placeholder='Email'
						className='mt-6'
					/>
					<input
						onChange={e => handleChange(e)}
						name='GSM'
						type='tel'
						value={formData.GSM}
						maxLength={10}
						placeholder='GSM (5XX) ...'
						className='mt-6'
					/>
					<textarea
						onChange={e => handleChange(e)}
						name='message'
						value={formData.message}
						placeholder='Mesajınız'
						cols='30'
						rows='5'
						className='mt-9'
					></textarea>
					<button
						className='appearance-none outline-none font-bebasNeue  w-full pb-[0.8rem] pt-4 mt-2 lg:hover:bg-[#f4ecff] bg-customLightPink text-customDarkPurple '
						type='submit'
					>
						G Ö N D E R
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
