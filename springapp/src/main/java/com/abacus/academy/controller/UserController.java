package com.abacus.academy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.abacus.academy.dao.AdmissionDAO;
import com.abacus.academy.exception.NoExistence;
import com.abacus.academy.model.AdmissionModel;
import com.abacus.academy.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	@PostMapping("user/addAdmission")
	String addAdmission(@RequestBody AdmissionDAO admissionDAO) {
		return userService.addAdmission(admissionDAO);
	}
	
	@GetMapping("user/viewAdmission")
	List<AdmissionModel> viewAdmission(@RequestParam String email) throws NoExistence{
		return userService.viewAdmission(email);
	}
	
	@PutMapping("user/editAdmission/{enrolId}")
	String editAdmission(@RequestParam int enrolId,@RequestBody AdmissionDAO admissionDAO) {
		
		return userService.editAdmission(enrolId,admissionDAO);
	}
	
	@DeleteMapping("user/deleteAdmission/{enrolId}")
	String deleteAdmission(@PathVariable int enrolId) {
		
		return userService.deleteAdmission(enrolId);
	}
	
	@GetMapping("user/viewStatus")
	String viewStatus(@RequestParam int applicationId) {
		return userService.viewStatus(applicationId);
	}
	
}
