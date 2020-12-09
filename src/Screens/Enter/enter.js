import SignIn from "../../Components/sign-in";
import Signup from "../../Components/Sign-up";
import { useState } from "react";

export default function Enter() {
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const [role, setRole] = useState("cooker");

  const handleSignUp = (event) => {
    event.preventDefault();
    setRole(event.target.id);
    setDisplaySignUp(true);
  };
  return (
    <div>
      {displaySignUp ? (
        <Signup role={role} hideSignUp={setDisplaySignUp} />
      ) : (
        <SignIn handleSignUp={handleSignUp} />
      )}
    </div>
  );
}
