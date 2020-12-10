import React from "react";
import { useParams } from "react-router-dom";
import apiKey from "../../utils/constants";
//   const history = useHistory();

const heroku = "https://taste-hunter.herokuapp.com/dishes";
const heroku_api_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ1c2VyMkBleGFtcGxlLmNvbSIsImlhdCI6MTYwNzQ1MzkzNn0.hJK2SbWMTB_jdAjUvDLox985qwLA8jr7ujck2ugYFn0";
// const local = "http://http://localhost:4000/dishes"

const token = heroku_api_key;

export default function Dishes(loginData) {
  const [dishes, setDishes] = React.useState(null);

  React.useEffect(() => {
    // const token = window.localStorage.getItem('access_token')
    // if (token){}
    fetch(`${heroku}/api_key=${token}`)
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
  }, []);
  console.log(dishes);
  if (!dishes) {
    return "Loading";
  }
  const dishes_2 = dishes[0];
  return (
    <div>
      <h2>{dishes_2.name}</h2>
      <p>{dishes_2.description}</p>
      <h2>{dishes_2.price}</h2>
      <h2>{dishes_2.category}</h2>
    </div>
  );
}
