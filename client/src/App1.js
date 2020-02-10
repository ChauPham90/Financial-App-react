import React, { useState } from "react";
import "./styles.css";
import "./demo.css";
import { Input } from "antd";
import UserInput from "./InputField/UserInput";

import Score from "./circle/Score";
export default function App1() {
  const [state, setNewState] = useState(20);
  const changeState = () => {
    setNewState(state + 1);
  };

  return (
    <div>
      <Score number={state} />
      <button onClick={changeState}>Add</button>
      <UserInput value="22" />
    </div>
  );
}
