import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class EnrollCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }

    }

    componentDidMount() {
        CourseService.getCourses().then((res) => {
            this.setState({ courses: res.data })
        })
    }


    render() {
        return (
            <div>
                <div class="main_container" style={{ 'align-items': 'center' }}>
                    {
                        this.state.courses.map(
                            course => {
                                <div class="main_div" className="shadow-lg rounded overflow-hidden" style={{
                                    'padding': '28px 40px',
                                    'background-color': 'wheat',
                                    'border-radius': '5px', 'width': '800px',
                                    'display': 'inline-block'
                                }}>
                                    <div class="div">
                                        <p>Course name: {course.courseName}</p>
                                        <p>Course Duration: {course.courseDuration}</p>
                                        <p>Course Available Timing: 6am to 6pm</p>
                                    </div>
                                    <div class="div1">
                                        <p>Number of Students: 222</p>
                                        <p>Course Description: {course.courseDescription}</p>
                                        <button className="md:w-full bg-fuchsia-800 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">Enroll Now</button>
                                    </div>
                                </div>
                            }
                        )

                    }
                    
                    {/* <Routes>
                        <Route path="/course" element={<Course />} />
                        onClick={navigateToCourse}
                    </Routes> */}

                </div>

            </div>
        )
    }
}

export default EnrollCourseComponent;
