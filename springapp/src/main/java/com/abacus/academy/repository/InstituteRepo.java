package com.abacus.academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abacus.academy.model.InstituteModel;

@Repository
public interface InstituteRepo extends JpaRepository<InstituteModel,Integer>{
}