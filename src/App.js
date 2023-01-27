import LandingPage from './pages/LandingPage';
import Teams from './pages/Teams';
import Nav from './pages/Nav';

function App() {
	return (
		<div className='App'>
			<div className='font-bebasNeue bg-customDarkPurple flex flex-row justify-center'>
				<Nav />
				<div className='mt-36 flex flex-col justify-center w-full'>
					<LandingPage />
					<Teams />
				</div>
			</div>
		</div>
	);
}

export default App;
