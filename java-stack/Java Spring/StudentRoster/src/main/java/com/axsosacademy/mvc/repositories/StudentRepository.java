package com.axsosacademy.mvc.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsosacademy.mvc.models.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Long>{
	List<Student> findAll();

}
