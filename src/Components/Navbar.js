import React, { Component } from 'react'
import './navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <div className='' style={{display : 'flex', justifyContent : 'space-between',color : 'white', backgroundColor : 'black'}}>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
        
          <div className="" style={{paddingTop : 8,paddingLeft : 18, alignItems: 'center',justifyContent: 'center', fontSize : 20}}>
              Shopex
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent : 'center'}}>
            <div className="freeSpace" style={{minWidth : 30, border: '0px solid red'}}>
                Total - {this.props.totalCost}
            </div>
            <div className="cartInNavbar position-relative" style={{padding : 5,display: 'flex', flexDirection: 'row',position : 'relative'}}>            
              <img src="https://cdn-icons-png.flaticon.com/512/3082/3082011.png" style={{height : 40}} alt="..." />
              <span className="badge rounded-pill bg-primary" style={{position : 'absolute', top : '120', start :'100'}}>
                {this.props.totalItems}
              </span>
            </div>
          </div>        
        </div>
      </>
    )
  }
}
