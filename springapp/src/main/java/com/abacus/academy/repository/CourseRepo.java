package com.abacus.academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abacus.academy.model.CourseModel;


@Repository
public interface CourseRepo extends JpaRepository<CourseModel,Integer>{

}