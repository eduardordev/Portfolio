import React, { Component } from 'react';
import "./contact.css"


class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <h2 className="connTitle">Connect with me</h2>

                <div className= "info">
                    <div className="circle"><a href="https://github.com/eduardorh1312" id="gitc"><img src="src\assets\git.png" className="git"></img></a></div>
                    <div className="circle1">
                        <h3>Contact Info</h3>
                        <p className="pp">eduardorh1312@gmail.com</p>
                        <p className="pp">ram19946@uvg.edu.gt</p>
                        <a className="whapp" href="https://wa.link/29pdia"><img src="src\assets\whapp.png" className="imgw"></img>WhatsApp</a>
                    </div>
                </div>
            </section>
        )
    }

}

export default Contact;