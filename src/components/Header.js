import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <strong>Todo</strong>
          <i>Mobx</i>
        </div>
        <span>Github</span>
      </header>
    );
  }
}

export default Header;
