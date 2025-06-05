package com.axsosacademy.mvc.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.axsosacademy.mvc.models.Dorm;


public interface DormRepository extends CrudRepository<Dorm, Long> {


	List<Dorm> findAll();
}
