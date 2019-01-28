import React from "react";
import loadingSVG from "../../assets/svg/loading.svg";
import "./style.css";

export default function Spinner(props) {
  const isActive = props.isActive;

  if (isActive) {
    return <img className="loading" src={loadingSVG} alt="loading" />;
  }
  
  return null
}
