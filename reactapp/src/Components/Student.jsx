import React from "react";
import "../css/style.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import StudentAdd from "./StudentAdd";

const Students = () => {
  const navigate = useNavigate();
  const navigateToAddStudent = () => {
    navigate("/add");
  };
  return (
    <>
      <form className="temp_form">
        <input
          className="input"
          type="text"
          placeholder="Enter your Id"
          autoComplete="off"
          id="search"
          autoFocus
        />
        <button className="input" type="button" value="search">
          Search
        </button>
      </form>
      <div className="mt-20 lg:m-20 md:m-20 sm:m-20">
        <table style={{ width: "100%" }}>
          <tr>
            <th>Student ID</th>
            <th>Student name</th>
            <th>Enrolled Course</th>
            <th>Mobile number</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1232213</td>
            <td>Anual</td>
            <td>Levo Wooden </td>
            <td>3399990210</td>
            <td>
              <button className="edit_button">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="delete_button">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>1232213</td>
            <td>Anual</td>
            <td>Levo Wooden </td>
            <td>3399990210</td>
            <td>
              <button className="edit_button">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="delete_button">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>1232213</td>
            <td>Anual</td>
            <td>Levo Wooden </td>
            <td>3399990210</td>
            <td>
              <button className="edit_button">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="delete_button">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
          <Routes>
        <Route path="/add" element={<StudentAdd />} />
        onClick={navigateToAddStudent}
      </Routes>
  
            <td>1232213</td>
            <td>Anual</td>
            <td>Levo Wooden </td>
            <td>3399990210</td>
            <td>
              <button className="edit_button">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="delete_button">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        </table>
        <div class="md:w-full px-3 mt-20">
          <div class=" absolute bottom-20 right-20">
            <button
              onClick={navigateToAddStudent}
              class="px-5 py-2 text-sm font-bold tracking-wide text-white bg-red-500 rounded-full focus:outline-none"
            >
              Add Student
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Students;
