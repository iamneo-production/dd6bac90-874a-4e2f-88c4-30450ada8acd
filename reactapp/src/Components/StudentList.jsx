import React, { Component } from 'react'
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom';

class StudentsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: [],
                studentName: '',
                // studentDOB: '',
                address: '',
                mobile: '',
                age: ''
        }
        // this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id);
        window.location.reload(false);
    }
    
    editStudent(id){
        
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    // addStudent = (e) => {
    //     e.preventDefault();
    //     let student = {
    //         studentName: this.state.studentName,
    //         studentDOB: '1999-12-31',
    //         address: this.state.address,
    //         mobile: this.state.mobile,
    //         Age: this.state.Age
    //     }
    //     StudentService.addStudent(student);
    // }

    render() {
        return (
            <div style = {{'margin-left': '30px','margin-right': '30px'}}>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                 <h2 className="text-center btn-primary-sm">Students List</h2>
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button> */}
                    <Link to="/students/new" className="btn btn-info" style={{'max-width': '150px', 'color': 'white'}}>Add Student</Link>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Student First Name</th>
                                    <th> Age</th>
                                    <th> address</th>
                                    <th> mobile</th>
                                    <th> actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr>
                                             <td> {student.studentName} </td>   
                                             <td> {student.age}</td>
                                             <td> {student.address}</td>
                                             <td> {student.mobile}</td>
                                             <td>
                                                 <button onClick={ () => this.editStudent(student.studentId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.studentId)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default StudentsList