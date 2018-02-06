import React from 'react';


export class Header extends React.Component {
  render(){
    return (
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="#">CircuitBread</a>

  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">TOOLBOX</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">ABOUT</a>
    </li>
  </ul>
</nav>

      </div>
    );
  }
}
