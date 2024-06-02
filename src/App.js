import Home from "./components/Home/Home.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import About from "./components/About/About.tsx";
import Benefits from "./components/Benefits/Benefits.tsx";
import Plans from "./components/Plans/Plans.tsx";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Benefits />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
