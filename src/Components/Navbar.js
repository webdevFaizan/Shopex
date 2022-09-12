import React, { Component } from 'react'
import './navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <div className='nvb'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>            
            </ul>            
        </div>
        <div className="cartInNavbar position-relative" style={{position : 'relative'}}>
          <img src="https://cdn-icons-png.flaticon.com/512/3082/3082011.png" style={{height : 40}} alt="..." />
          <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary" style={{position : 'absolute'}}>
            {this.props.totalItems}
          </span>
        </div>
        <div className="freeSpace" style={{width : 30}}>

        </div>
        </nav>
        </div>
      </>
    )
  }
}
