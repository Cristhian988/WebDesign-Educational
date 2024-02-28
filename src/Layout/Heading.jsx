/* eslint-disable react/prop-types */
// import React from "react";

export default function Heading(props) {
  return (
    <div>
      <h3 className="text-5xl font-semibold">
        {props.title1}
        {" "} {/* {" "} Un Espacio */}
        <span className="text-5xl font-semibold text-green-800">
          {props.title2}
        </span>
      </h3>
    </div>
  );
}
