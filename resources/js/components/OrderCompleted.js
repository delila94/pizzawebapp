import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';
import MyGlobleSetting from './MyGlobleSetting';
class OrderCompleted extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', products: ''};
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/products')
       .then(response => {
         this.setState({ products: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
   


  render(){
    return (
      <div className="justify-content-md-center">
       
        <div className="container justify-content-md-center">
  <div className="row justify-content-md-center">
    <h1>Order successfully completed!</h1>
   
  </div>
</div>
    </div>
    )
  }
}
export default OrderCompleted;