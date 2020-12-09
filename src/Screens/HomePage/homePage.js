import { useParams } from "react-router-dom";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const { role } = useParams();
  console.log(role);
  let history = useHistory();
  function profileClick() {
    history.push("/cookerProfile");
  }
  function dishesClick() {
    history.push("/dishes");
  }
  function cookersClick() {
    history.push("/cookers");
  }

  return (
    <div>
      {role == "cooker" ? (
        <div className="component" onClick={profileClick}>
          <img src="../../img/user.png" alt="profile" className="icons"></img>
          Profile
        </div>
      ) : null}
      <div className="component" onClick={dishesClick}>
        <img
          src="../../img/food-serving.png"
          alt="dishes"
          className="icons"
        ></img>
        Dishes
      </div>
      <div className="last" onClick={cookersClick}>
        <img src="../../img/chef.png" alt="cooker" className="icons"></img>
        Cookers
      </div>
    </div>
  );
}
