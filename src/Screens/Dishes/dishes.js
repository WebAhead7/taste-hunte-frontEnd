import React, { useState, useEffect } from "react";
import {
  server_url,
  accessToken,
  apiKey,
  roleString,
} from "../../utils/constants";

//   const history = useHistory();

// const heroku = "https://taste-hunter.herokuapp.com/dishes";
const local = "http://localhost:4000/dishes";
// const token = heroku_api_key;

export default function Dishes(loginData) {
  const [dishes, setDishes] = React.useState(null);

  React.useEffect(() => {
    const api_key = window.localStorage.getItem("api_key");
    if (api_key) {
      fetch(`${local}/api_key=${api_key}`)
        .then((res) => {
          if (!res.ok) {
            const error = new Error("HTTP error");
            error.status = res.status;
            throw error;
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setDishes(data);
        });
      // .catch(error).console.log(error);
    }
  }, []);
  console.log(dishes);
  if (!dishes) {
    return "Loading";
  }
  return dishes.map((item) => (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <h2>{item.category}</h2>
    </div>
  ));
}
