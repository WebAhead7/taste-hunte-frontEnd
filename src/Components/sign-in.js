import { useState, useEffect } from "react";
import doFetch from "../utils/getData";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const handleInput = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    if (name === "email") setEmail(val);
    else setPassword(val);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const url = "https://taste-hunter.herokuapp.com/cookers/login";
    doFetch(
      url,
      "POST",
      { "content-type": "application/json" },
      JSON.stringify({ email, password })
    ).then((data) => {
      if (!data.message) {
        window.localStorage.setItem(accessToken, data[accessToken]);
        window.localStorage.setItem(apiKey, data[apiKey]);
        // redirect using useHistory hook...
        return;
      }
      console.log(data.message);
    });
  };

  return (
    <form id="sign-in" onSubmit={handleSignIn}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleInput}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleInput}
      />
      <button type="submit">Sign In</button>
      <p>
        {"Sign up as "}
        <a href="" id="user" onClick={props.handleSignUp}>
          User
        </a>
        {" or "}
        <a href="" id="cooker" onClick={props.handleSignUp}>
          Cooker
        </a>
      </p>
      <p id="sever-message"></p>
    </form>
  );
}
