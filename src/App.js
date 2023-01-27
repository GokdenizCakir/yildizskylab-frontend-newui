import LandingPage from "./pages/LandingPage";
import Teams from "./pages/Teams";
import Nav from "./pages/Nav";

function App() {
  return (
    <div className="App">
      <div className=" font-bebasNeue bg-customDarkPurple">
        <Nav />
        <LandingPage />
        <Teams />
      </div>
    </div>
  );
}

export default App;
