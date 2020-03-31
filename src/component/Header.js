import React from 'react'
import {Link,withRouter } from "react-router-dom"

 const isactive=(history,path)=>{
   if(history.location.pathname===path){ 
return {color:"#ff9900",fontSize:"140%",fontFamily:"Alfa Slab One"}
}
   else  return {color:"#ffffff",fontSize:"90%"}

 }


const Header=({history})=>(       //Extracting history from props
<ul  className="nav nav-tabs bg-primary">

<li className="nav-item" >
    <Link className="nav-link disabled"  style={isactive(history,"/")} > HOME </Link>
  </li>
  <li className="nav-item nav-link disabled" >
      
<i class="material-icons large" style={{fontSize:"48px"}} >label_important</i> 
   
     </li>  

  <li className="nav-item" >
    <Link className="nav-link disabled"  style={isactive(history,"/menu")} > MENU </Link>
  </li>
  <li className="nav-item nav-link disabled" >
      
<i class="material-icons large" style={{fontSize:"48px"}} >label_important</i> 
   
     </li>
  <li className="nav-item" style={{color:"#ff9900"}}>
   <span className="nav-link disabled" style={isactive(history,"/billing")}> BILLING </span>
    </li>
 
</ul>  

	) 
export default withRouter(Header)


