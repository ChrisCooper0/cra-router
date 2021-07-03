import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/shop/:id"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
