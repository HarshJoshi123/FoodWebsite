import React,{Component} from "react"
import data from "../foodmenu.js"
import "./menustyling.css"
import {Redirect} from "react-router-dom"
import AOS from 'aos'; 
import 'aos/dist/aos.css';
class Menu extends Component{
constructor(){
  super()
  this.state={
   cart:[],
   total:0,
   redirectToBilling:false
  }
  this.handlechange=this.handlechange.bind(this);
}

componentDidMount(){
AOS.init({duration:1200});
 localStorage.removeItem('cartitems');


}




handlechange=(qty,i,j)=>{
var qt=qty
console.log(i,j.target.value,qty);
console.log(data[i].Qtprice[qt]) //price
var name=`${data[i].name} ( ${qt}) `
var priceitem=data[i].Qtprice[qt]
var items=j.target.value
var imgpath=data[i].path
//name: price : qtyname: noofitems:
var cartitem={
name,priceitem,items,qt,imgpath}


var carti=this.state.cart

if(carti.find(x=> x.name === name )  ){
  carti.splice(carti.findIndex(x=> x.name === name ),1)
   }
if(cartitem.items > 0){
  carti.push(cartitem)
}


this.setState({cart:carti})
var totalprice=0;
if(carti.length){
for(var i=0;i<carti.length;i++){
  totalprice=totalprice+carti[i].priceitem*carti[i].items
}
}
this.setState({total:totalprice})

console.log(this.state.cart,this.state.total)
}


Checkout=()=>{
localStorage.setItem("cartitems",JSON.stringify(this.state.cart))
localStorage.setItem("total",JSON.stringify(this.state.total))
this.setState({redirectToBilling:true})
return true


}




render(){

if(this.state.redirectToBilling){
  return <Redirect to="/billing" />
}

const {cart}=this.state

  return(<div  class="container jumbotron" >
   <h1 style={{fontFamily:"sofia",textAlign:"center",fontWeight:"bolder",letterSpacing:"8px"}}>MENU </h1>  
{ cart[0] && (<div style={{display:"flex"}}class="alert alert-success" role="alert">
  You have {cart.length} Items In Your Cart &nbsp; <span style={{fontWeight:"bolder"}}>  {this.state.total} &#8377; (Without Taxes) </span> 
  <button style={{marginLeft:"auto"}} onClick={this.Checkout} class="btn btn-primary btn-lg active" role="button"> CHECKOUT </button>
</div> )              }

   
    <div id="main-container" style={{display:"flex",flexWrap:"wrap"}} className="container ">
    

    {
    data.map((v,i)=>{
       
     return(
<article data-aos="fade-right" id="article-card" style={{padding:"0px 2px 4px 2px",marginBottom:"7px"}} >
        
          <div id="div-card-image">
          <img src={v.path} id="image-card" /> 
        </div>
       <section style={{display:"flex",flexDirection:"column",flexWrap:"wrap"}} className="Prices"> <h2 style={{flexGrow:"2",backgroundColor:"MediumSeaGreen",textAlign:"center",fontFamily:"Alex Brush"}}>{v.name} </h2> 
       <div style={{flexGrow:"1",display:"flex",flexWrap:"wrap"}}> {v.Qty.map((qty,j)=>{return(<div style={{flexGrow:"1",paddingBottom:"10px"}}> &nbsp; {qty} ({v.prices[j]} &#8377;) :<input type="number" id="quantity"  onChange={this.handlechange.bind(this,qty,i)} name="quantity" placeholder="0" min="0" max="5" id="tentacles" name="tentacles" />  </div>)})}   </div>
      
      </section>
      
       </article>
      )



    })


    }
    </div>
   

    </div>
    )
}



}
export default Menu