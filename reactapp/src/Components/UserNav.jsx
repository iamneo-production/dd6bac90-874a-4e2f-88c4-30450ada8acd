import React, { Component } from 'react';
import NavButton from './ContextState';
import { NavLink } from "react-router-dom";

class UserNavbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <nav className="flex items-center justify-between flex-wrap bg-success p-3 fixed w-full z-10 top-0 pin-t">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <li className="list-none text-white no-underline hover:text-white hover:no-underline">
                            <NavLink
                                className="text-white no-underline text-2xl pl-2 font-semibold"
                                to="/"
                            >
                                Academies
                            </NavLink>
                        </li>
                    </div>

                    <div className="block lg:hidden">
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
                        >
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>

                    <div
                        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
                        id="nav-content"
                    >
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-6">
                                <NavLink
                                    className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300"
                                    to="/academy"
                                >
                                    Academy
                                </NavLink>
                            </li>
                            <li className="mr-6">
                                <NavLink
                                    className="inline-block py-2 px-2 text-white no-underline hover:text-blue-900"
                                    to="/enrollcourse"
                                >
                                    Enroll a Course
                                </NavLink>
                            </li>

                            
                            <li className="mr-6">
                                {/* <NavLink
                                    className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300"
                                    to="/login"
                                >
                                    {action}
                                </NavLink> */}
                                <NavButton/>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}

export default UserNavbar;
