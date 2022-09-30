import React, {Component} from  'react';
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            studentName: '',
            age: '',
            address: '',
            mobile: '',
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

     saveStudent = (e) => {
        e.preventDefault();
        let student = {
            studentName: this.state.studentName,
            // studentDOB: '1999-12-31',
            address: this.state.address,
            mobile: this.state.mobile,
            age: this.state.age
        }
        console.log('academy => ' + JSON.stringify(student));
        StudentService.addStudent(student);
        window.location.href = 'http://localhost:3000/students';
    }


    changeNameHandler(event){
        this.setState({studentName: event.target.value});
    }

    changeAgeHandler(event){
        this.setState({age: event.target.value});
    }

    changeMobileHandler(event){
        this.setState({mobile: event.target.value});
    }

    changeAddressHandler(event){
        this.setState({address: event.target.value});
    }

    render() {
        return (
            <body className="bg-gray-100 flex bg-local">
            <div className=" mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
              <form>
              <br></br>
                <p></p>
                <h1 classNameName="mt-10">Add Student</h1>
                <br></br>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        for="company"
                      >
                        Name of the Student*
                      </label>
                      <input
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Name of the student"
                        value={this.state.studentName}
                        onChange = {this.changeNameHandler}
                      />
                    </div>
      
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        for="company"
                      >
                        Age*
                      </label>
                      <input
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Age"
                        value={this.state.age}
                        onChange = {this.changeAgeHandler}
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
                    Student's Address
                  </label>
      
                  <input
                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="company"
                    type="text"
                    placeholder="Address"
                    value={this.state.address}
                    onChange = {this.changeAddressHandler}
                  />
      
                  <div className="-mx-3 md:flex mt-2">
                    <div className="md:w-full px-3">
                      <button onClick={this.saveStudent} className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                        Add Student
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

export default CreateStudentComponent;
