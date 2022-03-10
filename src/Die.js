import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  function x() {
    const hello = [];
    for (let i = 0; i < props.value; i++) {
      hello.push(<h2 className={`die-${props.value}`}></h2>);
    }
    return hello;
  }
  return (
    <div
      className={`die-face-${props.value}`}
      style={styles}
      onClick={props.holdDice}
    >
      {x()}
    </div>
  );
}
