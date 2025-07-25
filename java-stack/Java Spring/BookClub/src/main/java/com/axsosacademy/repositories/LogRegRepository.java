package com.axsosacademy.repositories;


import java.util.List;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsosacademy.models.User;


@Repository
public interface LogRegRepository extends CrudRepository<User, Long> {
	List<User> findAll();
    Optional<User> findByEmail(String email);
}
