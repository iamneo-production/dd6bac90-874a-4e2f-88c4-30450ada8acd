import React, {Component}  from "react";
import { NavLink } from "react-router-dom";

const getLoginStatus = window.localStorage.getItem("isLoggedIn");
const getRole = window.localStorage.getItem("role");
let myInstituteIdtoedit=0;

class NavButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        window.localStorage.setItem("isLoggedIn", "false");
        window.localStorage.setItem("role", "")
        window.location.reload();
    };


    render() {
        return (
            <div>
                {getLoginStatus === 'true' ?
                    <NavLink
                        className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300"
                        onClick={this.handleClick}    
                    >
                        Logout
                    </NavLink>
                    : <NavLink
                        className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300"
                        to="/login"
                    >
                        Login
                    </NavLink>
                }
            </div>
        )
    }
}

export default NavButton;


