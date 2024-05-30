import Home from "./components/Home/Home.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import About from "./components/About/About.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
