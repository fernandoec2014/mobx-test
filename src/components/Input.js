import React from "react";
import store from "./store";

class Input extends React.Component {
  onEnter(e) {
    if (e.keyCode !== 13 || e.target.value === "") {
      return false;
    }
    console.log(e.target.value);
    store.add(e.target.value);
    e.target.value = "";
  }

  render() {
    return (
      <input
        onKeyDown={this.onEnter.bind(this)}
        className="input"
        type="text"
        placeholder="¿ Qué tarea hay para hoy ?"
      />
    );
  }
}

export default Input;
