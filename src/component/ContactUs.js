import React,{ Component } from "react";
import { Link } from "react-router-dom";
class ContactUs extends Component {
    render(){
        return(
            <div>
                <h1>ContactUs page</h1>
                <Link to="/">Click here to go to our home page</Link><br/>
            </div>
        )
    }
}

export default ContactUs