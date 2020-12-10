import { useParams } from "react-router-dom";
import "./style.css";
import { useHistory } from "react-router-dom";
import HomePageRoute from "../../Components/HomePageRoute";

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
        <HomePageRoute
          containerStyle="component"
          handleClick={profileClick}
          imageSrc="../../img/user.png"
          title="Profile"
          iconStyle="icons"
        />
      ) : null}
      <HomePageRoute
        containerStyle="component"
        handleClick={dishesClick}
        imageSrc="../../img/food-serving.png"
        title="Dishes"
        iconStyle="icons"
      />
      <HomePageRoute
        containerStyle="last"
        handleClick={cookersClick}
        imageSrc="../../img/chef.png"
        title="Cookers"
        iconStyle="icons"
      />
    </div>
  );
}
