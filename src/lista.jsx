import React from "react";
import { useSelector } from "react-redux";

function Lista() {
  const lista = useSelector((stateGlobal) => stateGlobal);

  return (
    <>
      <ul>
        {lista?.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </>
  );
}

export default Lista;
