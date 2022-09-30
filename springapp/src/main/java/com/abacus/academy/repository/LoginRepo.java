package com.abacus.academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abacus.academy.model.LoginModel;
import com.abacus.academy.model.UserModel;

@Repository
public interface LoginRepo extends JpaRepository<LoginModel,String>{
	LoginModel findByemail(String email);
}
