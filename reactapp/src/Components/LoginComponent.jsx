import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AuthService from '../services/AuthService';
import State from './State'
import AcademyList from './AcademyList';
// import Link from'react'
//const DESCRIPTION = "During growing years, kids learn faster, so, it would be great if you enrol your kids to an abacus classes at an early age. While we all want our children to achieve great heights in life, it’s important to underline that early childhood is the most crucial period especially for the development of brain and other cognitive skills. Any child who knows basic counting from 1 to 100 is technically qualiﬁed to be enrolled into Abacus classes.";
const getLoginStatus = window.localStorage.getItem("isLoggedIn");
const getRole = window.localStorage.getItem("role");
class LoginComponent extends Component {

    
    
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isAdmin: ''
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);
    }

    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }

    changePasswordHandler(event) {
        this.setState({ password: event.target.value });
    }

    checkboxChangeHandler(event){
        this.setState({isAdmin: event.target.checked});
    }

    login = (e) => {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
            role: "user"
        }
        let admin = {
            email: this.state.email,
            password: this.state.password,
            role: "admin"
        }

        if(this.state.isAdmin){
            AuthService.loginAdmin(admin).then(res => {
                console.log(res);
                if(res.data){
                    console.log('Admin login successfull')
                    window.localStorage.setItem("isLoggedIn", true);
                    window.localStorage.setItem("role", "admin");
                    State.isAuthenticated = true;
                }else{
                    console.log('Admin login failed')
                    window.localStorage.setItem("isLoggedIn", false);
                    window.localStorage.setItem("role", "");
                    State.isAuthenticated = false;
                }
                window.location.reload();
            });
        }else{
            AuthService.loginUser(user).then(res => {
                if(res.data){
                    console.log('User login successfull')
                    window.localStorage.setItem("isLoggedIn", true);
                    window.localStorage.setItem("role", "user");
                    State.isAuthenticated = true;
                }else{
                    console.log('User login failed')
                    window.localStorage.setItem("isLoggedIn", false);
                    window.localStorage.setItem("role", "");
                    State.isAuthenticated = false;
                }
                window.location.reload();
            });
        }
       

    }


    render() {
        return (

            ((getLoginStatus === 'true') && (getRole === 'user' || 'admin'))? <AcademyList/> :
            <div>
                <section
                    className="h-100 gradient-form"
                    style={{ backgroundColor: "#eee" }}
                >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-10">
                                <div className="card rounded-3 text-black">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body p-md-5 mx-md-4 text-center">
                                                <div className="text-center">
                                                   
                                                    <h4 className="mt-1 mb-5 pb-1">Login Page</h4>
                                                </div>

                                                <form className='text-center'>
                                                    <p>Email</p>

                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="email"
                                                            id="form2Example11"
                                                            className="form-control"
                                                            placeholder="Enter Your Email"
                                                            value={this.state.email}
                                                            onChange={this.changeEmailHandler}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example22">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="form2Example22"
                                                            className="form-control"
                                                            placeholder="Enter Your Password"
                                                            value={this.state.password}
                                                            onChange={this.changePasswordHandler}
                                                        />

                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox"  id="flexCheckDefault"
                                                        value={this.state.isAdmin}
                                                        onChange={this.checkboxChangeHandler} />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            I'm Admin
                                                        </label>
                                                    </div>
                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button
                                                            onClick={this.login}
                                                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                            type="button"
                                                        >
                                                            Log in
                                                        </button>

                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Don't have an account?</p>
                                                        
                                                        <Link to="/register" class="px-5 py-2 text-sm font-bold tracking-wide text-white bg-red-500 rounded-full focus:outline-none">Create New</Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

            </div>
        )
    }
}

export default LoginComponent;
