import React from 'react';
import { SpinnerCircularSplit } from "spinners-react";

export const Loading = () => {
  return (
    <div className= "col">
      <SpinnerCircularSplit
        size={50}
        thickness={100}
        speed={100}
        color="#fff"
        secondaryColor="rgba(128, 128, 128, 0.5)"
      />
      <p>Loading...</p>
    </div>
  );
};