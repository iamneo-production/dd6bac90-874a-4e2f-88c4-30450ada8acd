package com.abacus.academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abacus.academy.model.AdminModel;
import com.abacus.academy.model.StudentModel;


@Repository
public interface StudentRepo extends JpaRepository<StudentModel,Integer>{

}