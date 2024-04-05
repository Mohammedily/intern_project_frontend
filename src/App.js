
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Otp from "./Component/Otp/Otp";
import Profile from './Component/Profile/Profile';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path ='/register' component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path='/otp/:id' component={Otp} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
