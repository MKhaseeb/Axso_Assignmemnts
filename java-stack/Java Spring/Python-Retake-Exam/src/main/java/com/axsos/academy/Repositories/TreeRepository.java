package com.axsos.academy.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.academy.Models.Tree;

@Repository
public interface TreeRepository extends CrudRepository<Tree, Long>  {
	List<Tree> findAll();
    Optional<Tree> findBySpecies(String species);
    List<Tree> findByZipCode(String zipCode);
}
