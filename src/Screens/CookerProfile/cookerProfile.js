//editing cooker profile

import React from 'react';
import { useParams } from 'react-router-dom';
import apiKey from '../../utils/constants'


const heroku = "https://taste-hunter.herokuapp.com/cookers/login"
const heroku_access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ1c2VyMkBleGFtcGxlLmNvbSIsImlhdCI6MTYwNzQ1MzkzNn0.hJK2SbWMTB_jdAjUvDLox985qwLA8jr7ujck2ugYFn0"

const local = "http://http://localhost:4000/cookers/login"

const token = heroku_access_token;

export default function Cookers(loginData) {
  const [cooker,setCooker] = React.useState(null);

  React.useEffect(() => {
  fetch(`${local}/api_key=${token}`)

  .then((res) => {
    if (!res.ok) {
      const error = new Error("HTTP error");
      error.status = res.status;
      throw error;
    } 
      return  res.json() ;
  })
    .then( (data) => {
      console.log(data);
   })
      }, []);
      return(
        <div>
          {/* <h2>{mydata.cooker_id}</h2>
          <h2>{mydata.name}</h2>
          <h2>{mydata.description}</h2>
        <h2>{mydata.price}</h2>
        <h2>{mydata.category}</h2> */}
        Cookers 
        </div>
         )
}
//deleting dish:


//updating dish:
