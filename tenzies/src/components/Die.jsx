import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button className="die" style={styles}>
      {props.value}
    </button>
  );
}
