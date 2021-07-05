import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import ItemDetail from "./components/ItemDetail";
import NotFound from "./components/404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/shop/:id" component={ItemDetail}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
