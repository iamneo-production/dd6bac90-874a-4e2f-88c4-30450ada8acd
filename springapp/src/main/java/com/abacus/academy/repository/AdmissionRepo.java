package com.abacus.academy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abacus.academy.model.AdmissionModel;

@Repository
public interface AdmissionRepo extends JpaRepository<AdmissionModel,Integer>{

}