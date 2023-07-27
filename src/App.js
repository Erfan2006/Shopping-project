import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavbar from "./Components/Navigationbar/Navbar";
import Home from "./Components/Home/Home";
import AboutCenter from "./Components/Home/AboutCenter";
import Login from "./Components/Login/Login";
import Signup from "./Components/Sign up/Signup";
import Shop from "./Components/Shop/Shop"


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

          <Route exact path="/Signup">
            <Signup />
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