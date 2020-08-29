import React from "react";
import "./brick.css";

const Brick = (props) => {
  // console.log(props);
  return <div className="brick-cont">{props.name}</div>;
};

export default Brick;
