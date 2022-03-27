import React, { useContext } from "react";
import { NumberContext } from "../contexts/mainContext";

function Button() {
  const myNumber = useContext(NumberContext);
  console.log(myNumber);
  return (
    <div>
      <span>Here: {myNumber}</span>
    </div>
  );
}
export default Button;
