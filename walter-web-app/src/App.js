import "./App.css";
import Home from "./comps/Home";
import Navbar from "./comps/Navbar";

  const navbarItems = [
    { label: 'Home', onClick: () => console.log('Home clicked') },
    { label: 'About', onClick: () => console.log('About clicked') },
    { label: 'Contact', onClick: () => console.log('Contact clicked') },
  ];

function App() {
  return (
    <div className="App">
      <Navbar items={navbarItems} />
      <Home/>
    </div>
  );
}

export default App;
