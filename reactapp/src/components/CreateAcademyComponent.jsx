import React, {Component} from  'react';
import AcademyService from '../services/AcademyService';

class CreateAcademyComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            instituteName: '',
            instituteDescription: '',
            instituteAddress: '',
            mobile: '',
            email: ''
        }

        this.changeInstituteNameHandler = this.changeInstituteNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveAcademy = this.saveAcademy.bind(this);
    }


    saveAcademy = (e) => {
        e.preventDefault();
        let academy = 
        {
            instituteName: this.state.instituteName, 
            email: this.state.email, 
            mobile: this.state.mobile,  
            instituteAddress: this.state.instituteAddress,
            instituteDescription: this.state.instituteDescription

        }
        console.log('academy => ' + JSON.stringify(academy));
        AcademyService.addAcademy(academy);
        window.location.reload(false);
        window.location.href = "http://localhost:8080/academy";
    }
    changeInstituteNameHandler(event){
        this.setState({instituteName: event.target.value});
    }

    changeEmailHandler(event){
        this.setState({email: event.target.value});
    }

    changeMobileHandler(event){
        this.setState({mobile: event.target.value});
    }

    changeAddressHandler(event){
        this.setState({instituteAddress: event.target.value});
    }

    changeDescriptionHandler(event){
        this.setState({instituteDescription: event.target.value});
    }

    render() {
        return (
            <body className="bg-gray-100 flex bg-local">
            <div className=" mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
              <form>
              <br></br>
                <p></p>
                <h1 classNameName="mt-10">Add Academy</h1>
                <br></br>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        for="company"
                      >
                        Name of the Institute*
                      </label>
                      <input
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Title"
                        value={this.state.instituteName}
                        onChange = {this.changeInstituteNameHandler}
                      />
                    </div>
      
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        for="company"
                      >
                        Email*
                      </label>
                      <input
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange = {this.changeEmailHandler}
                      />
                    </div>
      
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        for="company"
                      >
                        Mobile Number*
                      </label>
                      <input
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Mobile Number"
                        value={this.state.mobile}
                        onChange = {this.changeMobileHandler}
                      />
                    </div>
                  </div>
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                    {" "}
                    Institute's Address
                  </label>
      
                  <input
                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="company"
                    type="text"
                    placeholder="Address"
                    value={this.state.instituteAddress}
                    onChange = {this.changeAddressHandler}
                  />
      
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                        Description
                      </label>
                      <textarea
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="application-link"
                        type="text"
                        placeholder="Description"
                        value={this.state.instituteDescription}
                        onChange = {this.changeDescriptionHandler}
                      />
                    </div>
                  </div>
      
                  <div className="-mx-3 md:flex mt-2">
                    <div className="md:w-full px-3">
                      <button onClick={this.saveAcademy} className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                        Add Accademy
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </body>
        )
    }
}

export default CreateAcademyComponent;
