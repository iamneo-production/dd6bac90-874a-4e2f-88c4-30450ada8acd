import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Course from './Components/Course';

import AcademyList from './Components/AcademyList'
import CreateAcademyComponent from './Components/CreateAcademyComponent'
import LoginComponent from './components/LoginComponent';

import CreateStudentComponent from './components/CreateStudentcomponent';
import RegisterComponent from './components/RegisterComponent';
import AdminNavbar from './Components/AdminNav'
import UserNavbar from './components/UserNav';
import EditAcademyComponent from './components/EditAcademyComponent';

import EnrollCourseComponent from './components/EnrollCourseComponent';



function App() {

  
  const getLoginStatus = window.localStorage.getItem("isLoggedIn");
  const getRole = window.localStorage.getItem("role");

  return (
    <>
      <BrowserRouter>
        {getRole === 'admin' ? <AdminNavbar /> : <UserNavbar />}
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route exact path="/academy/new"
            element={(getLoginStatus === 'true'  
              && getRole === 'admin')
              ? <CreateAcademyComponent />
              : <LoginComponent />
            } />
          <Route exact path="/academy" element={getLoginStatus === 'true'
            ? <AcademyList />
            : <LoginComponent />
          } />
          <Route exact path="/academy/edit" element={getLoginStatus === 'true'
            ? <EditAcademyComponent />
            : <LoginComponent />
          } />
          <Route exact path="/enrollcourse" element={(getLoginStatus === 'true' 
            && getRole === 'user')
            ? <EnrollCourseComponent />
            : <LoginComponent />
          } />
          <Route exact path="/course" element={getLoginStatus === 'true'
            ? <Course />
            : <LoginComponent />} />
          <Route exact path="/students" element={getLoginStatus === 'true'
            ? <StudentsList />
            : <LoginComponent />
          } />
          <Route exact path="/students/new" element={(getLoginStatus === 'true'
            && getRole === 'admin')
            ? <CreateStudentComponent />
            : <LoginComponent />
          } />
          <Route exact path="/login" element={<LoginComponent />} />
          <Route exact path="/register" element={<RegisterComponent />} />
        </Routes>
          {/* <FooterComponent/> */}
      </BrowserRouter>
    </>
  );
}

export default App;

