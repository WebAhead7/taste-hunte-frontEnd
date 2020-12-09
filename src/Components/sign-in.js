import { useState } from "react";
import { useHistory } from "react-router-dom";
import doFetch from "../utils/getData";
import { server_url, apiKey, accessToken } from "../utils/constants";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("cooker");
  const [serverMessage, setServerMessage] = useState("");

  const history = useHistory();

  const handleInput = (event) => {
    setServerMessage("");
    const name = event.target.name;
    const val = event.target.value;
    if (name === "email") setEmail(val);
    else setPassword(val);
  };

  const handleRole = (event) => {
    setUserRole(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const url = `${server_url}${userRole}s/login`;
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
        history.push(`/homePage/${userRole}`);
        return;
      }
      setServerMessage(data.message);
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
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleInput}
        required
      />
      <label>
        cooker
        <input
          type="radio"
          value="cooker"
          checked={userRole === "cooker"}
          onChange={handleRole}
        />
      </label>
      <label>
        user
        <input
          type="radio"
          value="user"
          checked={userRole === "user"}
          onChange={handleRole}
        />
      </label>
      <button type="submit">Sign In</button>
      <p id="sever-message">{serverMessage}</p>
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
    </form>
  );
}
