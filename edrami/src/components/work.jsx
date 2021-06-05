import React, { Component } from 'react';
import "./work.css"
import Animate from 'animate.css-react';

class Work extends Component {
    render() {
        return (
            <section>
                
                <h2 className="titleWeb">Web Projects</h2>
                <div className="works">
                    <div className="card" id="card">
                        <div className="hiddenn">
                            <img src="src\assets\mad.PNG" className="card-img-top" alt="..."></img>
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">CSS Pic Recreated</h5>
                            <p className="card-text" id="card-text" >A picture of Madeon and Porter Robinson recreated with CSS only.</p>
                            <a type="a" className="btn btn-primary btn-lg" id="btn" href="http://stw-uvg.site/labs/lab04/Ramirez19946/">See Illustration</a>
                        </div>
                    </div>

                    <div className="card" id="card">
                        <div className="hiddenn">
                            <img src="src\assets\chat.PNG" className="card-img-top" alt="..."></img>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title" id="card-title">JS Chat</h5>
                            <p className="card-text" id="card-text" >A chat created with dynamic HTML & JS with connection to other chats.</p>
                            <a type="a" className="btn btn-primary btn-lg" id="btn" href="https://github.com/eduardorh1312/chatJS">See Repo</a>
                        </div>
                    </div>

                    <div className="card" id="card">
                        <div className="hiddenn">
                            <img src="src\assets\calc.PNG" className="card-img-top" alt="..."></img>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">React Calculator</h5>
                            <p className="card-text" id="card-text" >A basic Calculator created with dynamic HTML, CSS & ReactJS.</p>
                            <a type="a" className="btn btn-primary btn-lg" id="btn" href="https://github.com/eduardorh1312/calculadora-LAB10-sytw">See Repo</a>
                        </div>
                    </div>

                    <div className="card" id="card">
                        <div className="hiddenn">
                            <img src="src\assets\roli.PNG" className="card-img-top" alt="..."></img>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">Web Page Recreated</h5>
                            <p className="card-text" id="card-text" >Web Page of ROLI recreated with ReactJS and more libraries.</p>
                            <a type="a" className="btn btn-primary btn-lg" id="btn" href="https://github.com/eduardorh1312/Proyecto1-SYTW">See Repo</a>
                            
                        </div>
                    </div>
                </div>
                <h2 className="titleWeb">UX/UI Projects</h2>
                <div className="works">
                    <div className="card" id="card">
                        <img src="src\assets\sg.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">SimpleGram</h5>
                            <p className="card-text" id="card-text" >Instagram rethink & redesign for a simplified navigation in the app.</p>
                            <a type="a" className="btn btn-primary btn-lg" id="btn" href="src\assets\SIMPLE-GRAM.pdf">See PDF</a>
                        </div>
                    </div>

                    <div className="card" id="card">
                        <img src="src\assets\wpp.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">WhatsApp Pay</h5>
                            <p className="card-text" id="card-text" >Creation and design of a new functionality for pay or send money in WhatsApp.</p>
                            <a type="a" className="btn btn-primary btn-lg" id="btn" href="src\assets\WhatsApp-Pay.pdf">See PDF</a>
                        </div>
                    </div>

                    <div className="card" id="card">
                        <img src="src\assets\am.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">Arcade Moms</h5>
                            <p className="card-text" id="card-text" >Redesign of Steam for gaming moms, your mom can play games too.</p>
                            <a type="a" className="btn btn-primary btn-lg" id="btn" href="src\assets\Arcade-Moms.pdf">See PDF</a>
                        </div>
                    </div>

                    <div className="card" id="card">
                        <img src="src\assets\eun.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">Eunoia</h5>
                            <p className="card-text" id="card-text" >Eunoia the app for your mental health, connect with the best professionals.</p>
                            <a type="a" className="btn btn-primary btn-lg" id="btn" href="src\assets\Eunoia.pdf">See PDF</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Work;