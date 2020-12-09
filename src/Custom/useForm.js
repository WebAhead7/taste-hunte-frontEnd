import { useState } from "react";

export default function useForm(inintailValues) {
  const [state, setSate] = useState(inintailValues);

  return [
    state,
    (event) => {
      event.preventDefault();
      state[event.target.name] = event.target.value;
      setSate((currentState) => ({ ...currentState }));
    },
  ];
}
