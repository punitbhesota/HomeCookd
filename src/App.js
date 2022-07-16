import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import How from "./Pages/How/How";
import Third from "./Pages/Third/Third";
import Forth from "./Pages/Forth/Forth";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <How />
      <Third />
      <Forth />
      <About />
      <Footer />
    </div>
  );
}

export default App;
