import React from "react";
import { useParams } from "react-router-dom";

import { userDetails } from "../../utils/constants";
import CookerProfileInfo from "../../Components/CookerProfileInfo";
import "./style.css";

export default function CookerProfile() {
  // const [userDetails, setUserDetails] = React.useState("");
  // const handleDetails = () =>
  //   setUserDetails(JSON.parse(window.localStorage.getItem(userDetails)).email);
  return (
    <div>
      <CookerProfileInfo
        cookerImg="../../img/chef.png"
        profileImg="profile-img"
        name={JSON.parse(window.localStorage.getItem(userDetails)).name}
        email={JSON.parse(window.localStorage.getItem(userDetails)).email}
        work_address={
          JSON.parse(window.localStorage.getItem(userDetails)).work_address
        }
      />
    </div>
  );
}
