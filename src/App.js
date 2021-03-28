import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <switch>
        <Route path="/Home" component={Home} />
        <Route path="/Product" component={Product} />
        <Route path="/Cart" component={Cart} />
      </switch>
    </Router>
  );
}

export default App;
