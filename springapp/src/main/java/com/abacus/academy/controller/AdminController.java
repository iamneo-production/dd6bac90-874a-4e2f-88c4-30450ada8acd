package com.abacus.academy.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.abacus.academy.dao.CourseDAO;
import com.abacus.academy.dao.InstituteDAO;
import com.abacus.academy.dao.StudentDAO;
import com.abacus.academy.exception.NoExistence;
import com.abacus.academy.model.AdminModel;
import com.abacus.academy.model.CourseModel;
import com.abacus.academy.model.InstituteModel;
import com.abacus.academy.model.LoginModel;
import com.abacus.academy.model.StudentModel;
import com.abacus.academy.service.AdminService;

@RestController
@CrossOrigin
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@PostMapping("/admin/addCourse")
	String addCourse(@RequestBody CourseDAO courseDAO) {
		return adminService.addCourse(courseDAO);
	}
	
	@GetMapping("/admin/viewCourse")
	List<CourseModel> viewCourse() {
		return adminService.viewCourse();
	}
	
	@PutMapping("/admin/editCourse/{courseId}")
	String editCourse(@PathVariable int courseId, @RequestBody CourseDAO courseDAO) throws NoExistence {
		
		return adminService.editCourse(courseId,courseDAO);
	}
	
	@DeleteMapping("/admin/deleteCourse/{courseId}")
	String deleteCourse(@PathVariable int courseId) throws NoExistence {
		return adminService.deleteCourse(courseId);
	}
	
	@PostMapping("/admin/addInstitute")
	String addInstitute(@RequestBody InstituteDAO instituteDAO) {
		return adminService.addInstitute(instituteDAO);
	}
	
	@GetMapping("/admin/viewInstitute")
	List<InstituteModel> viewInstitute() {
		return adminService.viewInstitute();
	}
	
	@GetMapping("/admin/viewInstitute/{instituteId}")
	Optional<InstituteModel> viewInstitute(@PathVariable int instituteId) {
		return adminService.viewInstitute(instituteId);
	}
	
	@PutMapping("/admin/editInstitute/{instituteId}")
	String editInstitute(@PathVariable int instituteId, @RequestBody InstituteDAO instituteDAO) throws NoExistence {
		
		return adminService.editInstitute(instituteId,instituteDAO);
	}
	
	@DeleteMapping("/admin/deleteInstitute/{instituteId}")
	String deleteInstitute(@PathVariable int instituteId) throws NoExistence {
		return adminService.deleteInstitute(instituteId);
	}
	
	@PostMapping("/admin/addStudent")
	String addStudent(@RequestBody StudentDAO studentDAO) {
		return adminService.addStudent(studentDAO);
	}
	
	@GetMapping("/admin/viewStudent")
	List<StudentModel> viewStudent() {
		return adminService.viewStudent();
	}
	
	@PutMapping("/admin/editStudent/{studentId}")
	String editStudent(@PathVariable int studentId, @RequestBody StudentDAO studentDAO) throws NoExistence {
		
		return adminService.editStudent(studentId,studentDAO);
	}
	
	@DeleteMapping("/admin/deleteStudent/{studentId}")
	String deleteStudent(@PathVariable int studentId) throws NoExistence {
		return adminService.deleteStudent(studentId);
	}
	
	
}
