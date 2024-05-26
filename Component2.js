import React from "react";
import Component3 from "./Component3";

const Component2 = ({ ComponentProps }) => {
  return (
    <h2>
      Where does it come from?
      {ComponentProps}
      <Component3 ComponentProps={ComponentProps} />
    </h2>
  );
};

export default Component2;
