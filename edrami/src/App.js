import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import Profile from "./components/profile.jsx";
import Work from "./components/work.jsx"

class App extends Component {
    render() {
        return (
            <div className="app">
                
                <div className = "bgitem1">
                </div>
                <div className = "bgitem2">
                    <h1 className = "bgitem2">CREATECREATECREATECREA</h1>
                </div>
                <div className = "bgitem3">
                </div>
                <div className = "bgitem4">
                    <h1 className = "bgitem4">CREATECREATECREATE</h1>
                </div>
                <div className = "bgitem5">
                </div>

               <div className = "navbar1">
                   <NavBar></NavBar>
               </div>
               <div className = "main">
                   <Main></Main>
               </div>

               <div className="my_profile" id="my_profile">
                    <Profile></Profile>
                </div>

                <div className="works" id="works">
                    <Work></Work>
                </div>      
               
               
            </div>
        );
    }
}

export default App;
