import React, { Component } from 'react';
import AcademyService from '../services/AcademyService';
import { Link } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import AppState from './State'

const getLoginStatus = window.localStorage.getItem("isLoggedIn");
const getRole = window.localStorage.getItem("role");
const thumbnials = [
    "https://images.pexels.com/photos/8612931/pexels-photo-8612931.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8763083/pexels-photo-8763083.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8612925/pexels-photo-8612925.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4173104/pexels-photo-4173104.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4173118/pexels-photo-4173118.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7188764/pexels-photo-7188764.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7188526/pexels-photo-7188526.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7188768/pexels-photo-7188768.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/6693301/pexels-photo-6693301.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://cdn.pixabay.com/photo/2016/11/29/01/16/abacus-1866497__480.jpg",
    "https://cdn.pixabay.com/photo/2014/10/12/16/25/abacus-485704__480.jpg",
    "https://cdn.pixabay.com/photo/2017/04/05/15/59/child-2205449__480.jpg",
    "https://cdn.pixabay.com/photo/2011/06/17/14/25/abacus-7935__480.jpg",
    "https://cdn.pixabay.com/photo/2019/10/23/14/13/school-4571739__480.jpg",
    "https://cdn.pixabay.com/photo/2019/10/23/14/16/abacus-4571741__480.jpg",
    "https://cdn.pixabay.com/photo/2017/06/02/16/44/abacus-2366784__480.jpg",
    "https://cdn.pixabay.com/photo/2020/10/04/19/39/abacus-5627423__480.png",
    "https://cdn.pixabay.com/photo/2020/11/29/10/17/abacus-5787097__480.jpg"
];

class AcademyList extends Component {


    constructor(props) {
        super(props)

        this.state = {
            academies: []
        }

        this.deleteAcademy = this.deleteAcademy.bind(this);
    }

    deleteAcademy(id) {
        AcademyService.deleteAcademy(id);
        // window.location.reload(false);
    }

    editAcademy(id) {
        window.location.href = `http://localhost:3000/academy/edit?id=${id}`;
    }

    componentDidMount() {
        AcademyService.getAcademies().then((res) => {
            this.setState({ academies: res.data })
        })
    }

    render() {


        return (

            <div>


                <div  style={{
                    'margin-top': '150px',
                    'margin-right': '60px', 'margin-bottom': '120px', 'margin-left': '200px', 'line-height': '30px'
                }}>
                    <div class="hero-unit">
                        <h1>Welcome to the best Abacus Academy in India!</h1>
                        <hr class="hr hr-blurry" />
                        <p>"Practice makes a man perfect". We strongly believe in the above said proverb.<br></br> So the students must practice sums for the effective inculcation of the training <br></br>and to make them grasp the concepts deeply.
                        <br></br>This method of calculation focuses on utilizing the innate power of your kid's brain <br></br> for visualizing the mental abacus procedure. The Brainbay Eduspark trains kids to <br></br>solve maths calculations mentally with excellent agility without using any pen or paper.
                        </p>
                        <p>
                            <a class="btn btn-primary btn-large" style={{'margin-right': '10px'}}>
                                Academies
                            </a>

                            <a class="btn btn-success btn-large"
                                href='/enrollcourse'
                            >
                                Courses
                            </a>
                        </p>
                    </div>
                    <br></br>
                    <hr class="hr hr-blurry" />

                </div>
                <div className="pl-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5" style={{
                    'margin-top': '120px',
                    'margin-right': '60px', 'margin-bottom': '120px'
                }}>


                    {
                        this.state.academies.map(
                            academy =>
                                <div className="rounded overflow-hidden shadow-lg w-96 h-5/5" key={academy.instituteId}>
                                    <img
                                        className="h-44 w-96"
                                        src={thumbnials[Math.floor(Math.random() * (thumbnials.length - 1))]}
                                        alt="Mountain"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{academy.instituteName}</div>
                                        <p className="text-gray-700 text-base ">
                                            {academy.instituteDescription}
                                        </p>{" "}


                                        {getLoginStatus === "true" && getRole === "admin" ? <div>
                                            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                                                onClick={() => this.editAcademy(academy.instituteId)}
                                            >
                                                Edit
                                            </button>
                                            <button onClick={() => this.deleteAcademy(academy.instituteId)} id={academy.instituteId} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                                                Delete
                                            </button>


                                        </div> : <p>TrustPilot: {Math.floor(Math.random() * 10)} / 10</p>}

                                    </div>
                                </div>
                        )

                    }
                </div>
                {getLoginStatus === "true" && getRole === "admin" ?    
                <div className="fixed bottom-20 right-20">
                    <Link to="/academy/new" class="px-5 py-2 text-sm font-bold tracking-wide text-white bg-red-500 rounded-full focus:outline-none">Add Academy</Link>
                </div>
                : <p></p>}
            </div>
        )
    }
}

export default AcademyList;