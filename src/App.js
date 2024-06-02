import Home from "./components/Home/Home.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import About from "./components/About/About.tsx";
import Benefits from "./components/Benefits/Benefits.tsx";
import Plans from "./components/Plans/Plans.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Benefits />
      <Plans />
    </div>
  );
}

export default App;
