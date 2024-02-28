/* eslint-disable react/prop-types */
// import React from "react";

export default function Button(props) {
  return (
    <div>
      <button className="bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[rgba(0,0,0,.24)_0px_3px_8px] hover:bg-green-700 hover:text-white transition-all">
        {props.title}
      </button>
    </div>
  );
}
