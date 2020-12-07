import { Route } from "react-router-dom";
const Enter = require("./Screens/Enter/enter");
const HomePage = require("./Screens/HomePage/homePage");
const Dishes = require("./Screens/Dishes/dishes");
const Cookers = require("./Screens/Cookers/cookers");

function App() {
  return (
    <div>
      <div>LOGO</div>
      <Route path="/" component={Enter} />
      <Route path="/homePage" component={HomePage} />
      <Route path="/dishes" component={Dishes} />
      <Route path="/cookers" component={Cookers} />
    </div>
  );
}

export default App;
