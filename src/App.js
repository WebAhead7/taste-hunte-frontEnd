import {
  BrowserRouter as Routers,
  Router,
  Route,
  Switch,
} from "react-router-dom";
import Enter from "./Screens/Enter/enter";
import HomePage from "./Screens/HomePage/homePage";
import Dishes from "./Screens/Dishes/dishes";
import Cookers from "./Screens/Cookers/cookers";
import CookerProfile from "./Screens/CookerProfile/cookerProfile";

function App() {
  return (
    <div className="container">
      <div>LOGO</div>
      <Switch>
        <Route exact path="/" component={Enter} />
        <Route path="/homePage/:role" component={HomePage} />
        <Route path="/dishes" component={Dishes} />
        <Route path="/cookers" component={Cookers} />
        <Route path="/cookerProfile" component={CookerProfile} />
      </Switch>
    </div>
  );
}

export default App;
