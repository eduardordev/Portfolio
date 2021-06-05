import React, { Component } from 'react';
import "./profile.css"


class Profile extends Component {
    render() {
        return (
            <section className="prof">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="src\assets\edu.jpg" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Who i am?</h5>
                                <p className="card-text">I´m a student of Computer Science at the Universidad del Valle de Guatemala, web developer and UX/UI designer.  I like everything that has to do with creativity because it makes me get my maximum potential and I always try to reflect it in the projects I work on.</p>
                                <button type="button" className="btn btn-primary btn-lg" >See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Profile;