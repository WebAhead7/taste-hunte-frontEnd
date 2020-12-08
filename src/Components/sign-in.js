import { useState, useEffect } from "react";
import doFetch from "../utils/getData";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    ).then(console.log);
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
    </form>
  );
}
