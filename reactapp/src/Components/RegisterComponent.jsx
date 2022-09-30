import React, { Component } from 'react';
import AuthService from '../services/AuthService';

class RegisterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            mobileNumber: '',
            userRole: ''
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);
        this.register = this.register.bind(this);
    }

    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }

    changePasswordHandler(event) {
        this.setState({ password: event.target.value });
    }

    changeMobileHandler(event) {
        this.setState({ mobileNumber: event.target.value });
    }

    checkboxChangeHandler(event) {
        this.setState({ userRole: event.target.checked });
    }

    register = (e) => {
        e.preventDefault();
        let payload = {
            email: this.state.email,
            password: this.state.password,
            mobileNumber: this.state.mobileNumber,
            role: this.state.userRole ? 'admin' : 'user'
        }
        console.log(payload);

        if(payload.role === 'admin'){
            AuthService.createAdmin(payload).then(res => {
                console.log(res.data);
            });
        }else{
            AuthService.createUser(payload).then(res => {
                console.log(res.data);
        });
    }
        
        window.location.href = 'http://localhost:3000/';
    }


    render() {
        return (
            <div>
                <section
                    className="h-100 gradient-form"
                    style={{ backgroundColor: "#eee" }}
                >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-end h-100">
                            <div className="col-xl-10">
                                <div className="card rounded-3 text-black">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body p-md-5 mx-md-4">
                                                <div className="text-center">
                                                    
                                                    <h4 className="mt-1 mb-5 pb-1">
                                                        Register 
                                                    </h4>
                                                </div>

                                                <form>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example11">
                                                            Email ID
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="form2Example11"
                                                            className="form-control"
                                                            placeholder="email address"
                                                            value={this.state.email}
                                                            onChange={this.changeEmailHandler}
                                                        />

                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example11">
                                                            Enter New Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="form2Example11"
                                                            className="form-control"
                                                            placeholder="New Password"
                                                            value={this.state.password}
                                                            onChange={this.changePasswordHandler}
                                                        />

                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example11">
                                                            Enter your Mobile no.
                                                        </label>
                                                        <input
                                                            type="text"
                                                            maxLength="10"
                                                            id="form2Example11"
                                                            className="form-control"
                                                            placeholder="Phone number"
                                                            value={this.state.mobileNumber}
                                                            onChange={this.changeMobileHandler}
                                                        />
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                                            value={this.state.isAdmin}
                                                            onChange={this.checkboxChangeHandler} />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Role is Admin
                                                        </label>
                                                    </div>

                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button
                                                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                            type="button"
                                                            onClick={this.register}
                                                        >
                                                            Register Now
                                                        </button>

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Routes>
        <Route path="/login" element={<Login />} />
        onClick={navigateToLogin}
      </Routes> */}
                </section>

            </div>
        )
    }


}

export default RegisterComponent;
