import React,{Component} from "react"
import {Redirect} from "react-router-dom"
import "./menustyling.css"
class Billing extends Component{
constructor(){
super();
this.state={

cart:[],
redirectIfNoCart:false,
total:0
}


}

 componentDidMount(){

if(!(localStorage.getItem("cartitems")&&localStorage.getItem("total"))){
   

	this.setState({redirectIfNoCart:true})
  return false
}
const cart=  JSON.parse(localStorage.getItem("cartitems")) 
const total=  JSON.parse(localStorage.getItem("total")) 

this.setState({cart:cart,total:total})
console.log(this.state.cart)
return true;

}



render(){
const {cart,redirectIfNoCart}=this.state
if(redirectIfNoCart){
	return <Redirect to="/menu" />}

  return(
<div class=" jumbotron-fluid ">

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">FoodItem</th>
      <th scope="col">Price</th>
      <th scope="col">Items</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
<tbody>
{cart.map((v,i)=>{


return (
    <tr>
      <th scope="row"> {i} </th>
      <td >{v.name}</td>
      <td>{v.priceitem} </td>
      <td> {v.items}</td>
      <td>{v.items * v.priceitem }</td>
    </tr>
    
)


})
}
</tbody>


  
</table>
<h2 style={{float:"right",color:"black"}} class="p-3 mb-2 bg-success text-white">Total: {this.state.total}</h2>



</div>	
		)

 
 }



}
export default Billing