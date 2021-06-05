import React, { Component } from 'react';
import "./navbar.css";

class NavBar extends Component{
    render(){
        return(

               <div className="navhead">
                   <div className = "images">
                        <a className="eerh">eerh</a>
                   </div>

                   <button className="toggle">
                       <span className = "bar"></span>
                       <span className = "bar"></span>
                       <span className = "bar"></span>
                   </button>
                   
                    <ul className="navlinks1">
                        <a href="#my_profile" className= "h1">profile</a>

                        <a href="#works" className= "h2">work</a>
                        
                        <a href="#" className= "h3">contact</a>
                    </ul>
                    
                    
               </div>

               
        );
        
    }
    
}

export default NavBar;
