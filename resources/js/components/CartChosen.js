import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';


class CartChosen extends Component {
  constructor(props) {
      super(props);
      this.state={products:[],total:'',qty:'',totalN:'' }
      this.handleSubmitC = this.handleSubmitC.bind(this);
      this.handleSubmitRemove = this.handleSubmitRemove.bind(this);
      this.updateCart = this.updateCart.bind(this);
  }
  
handleSubmitC(e) {
   
   if(this.state.total!=0){
  axios.get('clear') ;
   hashHistory.push('/order-completed');
   e.preventDefault();
   }
   else
   {
    e.preventDefault();
       alert("Your cart is empty! Please choose something to continue.")
   }

}
componentDidMount() {
  axios.get('myCart') 
  .then(response => {

    this.setState({ products: Object.values(response.data)});

  })
  .catch(function (error) {
    console.log(error);
  })
  axios.get('total') 
  .then(responseT => {
     
    this.setState({ total: responseT.data});

  })
  .catch(function (error) {
    console.log(error);
  })
}
updateCart(id,qty) {
       this.setState({qty:qty,id:id});

       axios.post('update',{qty:qty,
        id:id})
        .then(res=> {console.log(res.data); } );
        window.location.reload();
   
  }
handleSubmitRemove(id) {

  axios.post('remove',{id:id})
    .then(res=> {console.log(res.data); } );
    alert("Pizza removed from cart!");
    window.location.reload();
  
   
}
  
  render() {
    return (
      
       
          <div>
                <h2>Your order:</h2>
      
  
        <table className="table table-hover table-responsive{-sm|-md|-lg|-xl}">
            
  <thead>
      
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price $</th>
      <th scope="col" >Quantity</th>
      <th scope="col">Total $:</th>
      <th scope="col">Total €:</th>
      <th scope="col" >Remove:</th>
      <th scope="col" >Change Quantity:</th>
    </tr>
  </thead>

  {this.state.products.map((data,mykey)=>
    <tbody key={mykey}>
  <tr>
      <td>{data.id}</td>

 
     
      <td>{data.name}</td>
   
     
      <td>{data.price}</td>
  
     
      <td>{data.quantity}</td>
 
      
      <td>{data.quantity*data.price}</td>
      <td>{Math.floor(data.quantity*data.price*0.92 * 100) / 100 }</td>
      <td>
      <button type="button" onClick={(e)=>this.handleSubmitRemove(data.id)} className="btn btn-danger">Remove</button>
      </td>

      <td>
       <button  style={{margin: "3px"}} className="btn btn-secondary" type="button" onClick={(e)=> this.updateCart(data.id,1)}>+</button>
       <button  style={{margin: "3px"}} className="btn btn-secondary" disabled={data.quantity==1} type="button" onClick={(e)=> this.updateCart(data.id,-1)}>-</button>
      </td>
    
      </tr>
      </tbody>
  )}

</table>
      
<div>
    <div>
       <div><h4>Total price: {this.state.total}$</h4> </div>
       <div><h4>Total price: {Math.floor(this.state.total*0.92 * 100) / 100}€</h4> </div>
       <div><h4>Total with delivery +10$: {this.state.total+10}$</h4></div>
       <div><h4>Total with delivery +10€: {Math.floor((this.state.total*0.92+10) * 100) / 100}€</h4></div>
    </div>
<div>
    <br/>
<div><button className="btn btn-danger" onClick={this.handleSubmitC}>Clear Cart</button></div>
</div>
<br></br>
<h1>Person details</h1>
<div className="row">
  <div className="col-md-10"></div>
</div>
<form onSubmit={this.handleSubmit}>
<div className="form-group">
    <label >First Name</label>
    <input type="fname" className="form-control" id="exampleInputfName" aria-describedby="emailHelp" placeholder="Enter First Name"/>
    </div>
    <div className="form-group">
    <label >Last Name</label>
    <input type="lname" className="form-control" id="exampleInputlName" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
    </div>
	<div className="form-group">
    <label >Adress</label>
    <input type="address" className="form-control" id="exampleAddress" aria-describedby="emailHelp" placeholder="Enter Address"/>
    </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Phone Number:</label>
    <input type="number" className="form-control" id="exampleInputPhone" placeholder="Phone Number"/>
  </div>
    <button type="button" className="btn btn-dark" onClick={this.handleSubmitC}>Complete Your Order</button>
              
</form>      
    </div> 
    </div>
    );
  }
}


export default CartChosen;