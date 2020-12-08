import { useParams } from "react-router-dom";
import "./style.css";

export default function HomePage() {
  const { role } = useParams();
  console.log(role);

  return (
    <div>
      {role == "cooker" ? <div className="component">Profile</div> : null}
      <div className="component">Dishes</div>
      <div>Cookers</div>
    </div>
  );
}
