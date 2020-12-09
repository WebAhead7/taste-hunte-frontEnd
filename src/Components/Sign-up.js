import useForm from "../Custom/useForm";
import SignIn from "./sign-in";
import { server_url, apiKey, accessToken } from "../utils/constants";
import doFetch from "../utils/getData";

export default function SignUp(props) {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    name: "",
    work_address: "",
  });

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(values);
    doFetch(
      `${server_url}${props.role}s`,
      "POST",
      { "content-type": "application/json" },
      JSON.stringify(values)
    ).then((data) => {
      // display the message on the user screen ...
      console.log(data.message);
    });
  };
  return (
    <form onSubmit={handleSignUp}>
      <input
        type="email"
        name="email"
        placeholder="Email.."
        value={values.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password..."
        value={values.password}
        onChange={handleChange}
        required
      />
      {props.role === "cooker" && (
        <div>
          <input
            type="text"
            name="name"
            placeholder="User Name..."
            required
            value={values.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="work_address"
            placeholder="Work Address ..."
            value={values.work_address}
            onChange={handleChange}
            required
          />
        </div>
      )}
      <button>Sign Up</button>
    </form>
  );
}
