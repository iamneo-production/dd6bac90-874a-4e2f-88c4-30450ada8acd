package com.abacus.academy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abacus.academy.dao.UserDAO;
import com.abacus.academy.model.AdminModel;
import com.abacus.academy.model.LoginModel;
import com.abacus.academy.model.UserModel;
import com.abacus.academy.repository.AdminRepo;
import com.abacus.academy.repository.LoginRepo;
import com.abacus.academy.repository.UserRepo;

@Service
public class AuthService {
	

	@Autowired
	UserRepo userRepo;

	@Autowired
	AdminRepo adminRepo;

	@Autowired
	LoginRepo loginRepo;

	public Boolean isUserPresent(LoginModel lm) {

		LoginModel existingLoginModel = new LoginModel();
		existingLoginModel = loginRepo.findByemail(lm.getEmail());
		if (existingLoginModel != null) {
			if (existingLoginModel.getRole().equals("user")) {
				if (existingLoginModel.getPassword().equals(lm.getPassword())) {
					return true;
				}
			}
		}

		return false;
	}

	public Boolean isAdminPresent(LoginModel lm) {

		LoginModel existingLoginModel = new LoginModel();
		existingLoginModel = loginRepo.findByemail(lm.getEmail());
		if (existingLoginModel != null) {
			if (existingLoginModel.getRole().equals("admin")) {
				if (existingLoginModel.getPassword().equals(lm.getPassword())) {
					return true;
				}
			}
		}

		return false;
	}

	public String saveAdmin(AdminModel am) {

		if (adminRepo.findById(am.getEmail()).isPresent()) {
			return "Admin already present with the email: " + am.getEmail();
		} else {
			adminRepo.save(am);
			LoginModel lm = new LoginModel();
			lm.setEmail(am.getEmail());
			lm.setPassword(am.getPassword());
			lm.setRole(am.getUserRole());
			loginRepo.save(lm);
			return "Admin added";
		}
	}

	public String saveUser(UserModel um) {

		if (loginRepo.findById(um.getEmail()).isPresent()) {
			return "User already present with the email: " + um.getEmail();
		} else {
			userRepo.save(um);
			LoginModel lm = new LoginModel();
			lm.setEmail(um.getEmail());
			lm.setPassword(um.getPassword());
			lm.setRole(um.getUserRole());
			loginRepo.save(lm);
			return "User added";
		}
	}

}
