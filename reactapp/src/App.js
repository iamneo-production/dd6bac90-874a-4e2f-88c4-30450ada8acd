
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateAcademyComponent from './components/CreateAcademyComponent'
import StudentsList from './components/StudentsList';
import CreateStudentComponent from './components/CreateStudentcomponent';
import AdminNavbar from './components/AdminNav';
import UserNavbar from './components/UserNav';
import EditAcademyComponent from './components/EditAcademyComponent';
import EnrollCourseComponent from './components/EnrollCourseComponent';
import Login from './components/Login';
import Adminacademy from './components/Adminacademy';
import Admincourse from './components/Admincourse';



function App() {

  
  const getLoginStatus = window.localStorage.getItem("isLoggedIn");
  const getRole = window.localStorage.getItem("role");

  return (
    <>
      <BrowserRouter>
        {getRole === 'admin' ? <AdminNavbar /> : <UserNavbar />}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/academy/new"
            element={(getLoginStatus === 'true'  
              && getRole === 'admin')
              ? <CreateAcademyComponent />
              : <Login />
            } />
          <Route exact path="/academy" element={getLoginStatus === 'true'
            ? <Adminacademy />
            : <Login />
          } />
          <Route exact path="/academy/edit" element={getLoginStatus === 'true'
            ? <EditAcademyComponent />
            : <Login />
          } />
          <Route exact path="/enrollcourse" element={(getLoginStatus === 'true' 
            && getRole === 'user')
            ? <EnrollCourseComponent />
            : <Login />
          } />
          <Route exact path="/course" element={getLoginStatus === 'true'
            ? <Admincourse />
            : <Login />} />
          <Route exact path="/students" element={getLoginStatus === 'true'
            ? <StudentsList />
            : <Login/>
          } />
          <Route exact path="/students/new" element={(getLoginStatus === 'true'
            && getRole === 'admin')
            ? <CreateStudentComponent />
            : <Login />
          } />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
