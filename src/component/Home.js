import React ,{Component} from "react"
import "./homestyling.css"
import {Link} from "react-router-dom"
import AOS from 'aos'; 
import 'aos/dist/aos.css';
export default class Home extends Component{

componentDidMount(){
	AOS.init({duration:1200});
}

render(){

return(

<div>
	
 <div className="parallax-main1">
   <div  className="parallax-submain1">
    
    </div>
<div data-aos='fade-up' className="parallax-submain2">
    <Link to="/menu" style={{borderColor:"white",color:"white"}} class="btn btn-outline-secondary">GO TO MENU</Link>
    </div>
 




 </div>
 
 <div className="parallax-main2">
<p className="parallax-para"> 
<h3 data-aos='zoom-out-up' style={{textAlign:"center"}}>ABOUT US </h3>
<div data-aos='fade-right'>Contrary to popular belief, Lorem Ipsum is not simply 
 random text. It has roots in a piece of classical Latin literature
  from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor 
  at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div> </p>
 </div>
</div>
	)

}
}

