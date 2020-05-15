import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class Master extends Component {
  render(){
    return (
      <div >
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
<nav className="navbar navbar-expand-lg" style={{backgroundColor:"#313184"}}>
  <a className="navbar-brand" style={{color:"white"}} href="/">Pizza Yummi</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" style={{color:"white"}} href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" style={{color:"white"}} href="#/display-item">Order Online</a>   
    </div>
  </div>
  <div className="form-inline my-2 my-lg-0">
  <a className="nav-item nav-link" style={{color:"white"}} href="#/cartChosen"><i style={{fontSize:"45px"}} className="material-icons">shopping_cart</i></a>
    </div>
</nav>
           
          <div>
              {this.props.children}
          </div>   
<footer id="sticky-footer" className="py-4 bg-dark text-white-50" style={{color:"white"}}>
<div>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h4 className="font-weight-light mt-4 text-white">WORKING HOURS</h4>
          <p>
            We are delivering whole day long to keep you happy. You can start orderning from 8 AM until 10 PM
          </p>
        </div>
        <div className="col-md-4">
          <h4 className="font-weight-light mt-4 text-white">ABOUT US</h4>
          <p>
          The secret to our food? It’s pretty simple. Source fresh, quality ingredients. Prepare dishes with care and passion. Serve them with a warm smile
          </p>
        </div>
        <div className="col-md-4">
          <h4 className="font-weight-light mt-4 text-white">COMPANY</h4>
          <p>
          We’re Europe’s favourite pizza chain for a lot of reasons. Before that box ever arrives at your door, a diverse team of talented people make it happen, from the head office to the kitchen counter.
          </p>
        </div>
      </div>
    </div>
  </div>   
    <div className="container text-center">
      <small>Copyright &copy; Halac Delila</small>
    </div>
  </footer>

      </div>
      


    )
  }
}
export default Master;