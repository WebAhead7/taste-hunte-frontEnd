import React from 'react';

// local_dishes  = "http://localhost:4000/dishes"
const local_cookers = "http://localhost:4000/cookers"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjA3NTIwNTk5LCJleHAiOjE2MDc1Mjc3OTl9.ncHzVmMHHbiILa1UcFplYOukWGGuQunBqXJuMI2sSEs"

function Cookers(loginData) { //get authorization: "access_token"
const [cookers,setCookers] = React.useState(null);

React.useEffect(() => {
fetch(`${local_cookers}`, 
{
  method: "GET",
  // body: JSON.stringify(loginData),
  headers: { "content-type": "application/json" },
  headers: { authorization: `${token}` }
})
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
        Cookers 
        </div>
         )
}

export default Cookers;




// function Dishes(loginData){   //get authorization: "access_token"
// const [dishes,setDishes] = React.useState(null);
// React.useEffect(() => {
//   fetch(`${local_dishes}`, 
//   {
//     method: "GET",
//     // body: JSON.stringify(loginData),
//     headers: { "content-type": "application/json" },
//     headers: { authorization: `Bearer ${token}` }
//   }
//   .then((res) => {
//     if (!res.ok) {
//       const error = new Error("HTTP error");
//       error.status = res.status;
//       throw error;
//     } 
//       return  res.json() ;
//   })
//     .then( (data) => {
//       console.log(data);
//    })
//       }, []);

//   return(
//     <div>
   
//     Dishes 
//     </div>
//      )

// }