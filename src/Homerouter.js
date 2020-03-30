import {Switch,Route} from "react-router-dom"
import React from "react"
import Menu from "./component/Menu.js"
import Billing from "./component/Billing.js"
import Header from "./component/Header"
import Home from "./component/Home"
 const Homerouter=()=>(
<div>
<Header/>
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/menu" component={Menu} />
<Route exact path="/billing" component={Billing} />
</Switch>

</div>

)
export default Homerouter