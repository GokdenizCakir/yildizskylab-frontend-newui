import LandingPage from './pages/LandingPage';
import Teams from './pages/Teams';
import Nav from './pages/Nav';
import Contact from './pages/Contact';
import Events from './pages/Events';
import { useRef } from 'react';

function App() {
	const landingRef = useRef(null);
	const teamsRef = useRef(null);
	const eventsRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<div className='App'>
			<div className='font-bebasNeue relative bg-customDarkPurple flex flex-row justify-center text-customLightPink tracking-[0.16em]'>
				<Nav refs={{ landingRef, teamsRef, eventsRef, contactRef }} />
				<div className=' h-screen overflow-y-scroll scroll-smooth snap-proximity snap-y justify-center w-full'>
					<LandingPage ref={landingRef} />
					<Teams ref={teamsRef} />
					<Events ref={eventsRef} />
					<Contact ref={contactRef} />
				</div>
			</div>
		</div>
	);
}

export default App;
