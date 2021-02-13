import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import Cards from "./Components/Cards";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="home">
        <h3>Anand</h3>
        <h4>Roy</h4>
      </div>
      <Cards />
    </Router>
  );
}

export default App;
