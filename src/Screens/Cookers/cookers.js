import React, { useState, useEffect } from "react";
import {
  server_url,
  accessToken,
  apiKey,
  roleString,
} from "../../utils/constants";

function Cookers(loginData) {
  //get authorization: "access_token"
  const [cookers, setCookers] = useState(null);

  useEffect(() => {
    const access_token = window.localStorage.getItem(accessToken);
    const api_key = window.localStorage.getItem(apiKey);
    const role = window.localStorage.getItem(roleString);
    const url = `${server_url}cookers`;
    fetch(role === "user" ? `${url}/api_key=${api_key}` : url, {
      method: "GET",
      // body: JSON.stringify(loginData),
      headers: {
        "content-type": "application/json",
        authorization: access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          const error = new Error("HTTP error");
          error.status = res.status;
          throw error;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>Cookers</div>;
}

export default Cookers;
