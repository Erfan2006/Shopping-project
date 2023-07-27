import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavbar from "./Components/Navigationbar/Navbar";
import Home from "./Components/Home/Home";
import AboutCenter from "./Components/Home/AboutCenter";
import Login from "./Components/Navigationbar/Login/Login";
import Shop from "./Components/Navigationbar/Shop/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Switch>
          <Route exact path="/">
            <Home /> 
            <AboutCenter />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/Shop">
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;