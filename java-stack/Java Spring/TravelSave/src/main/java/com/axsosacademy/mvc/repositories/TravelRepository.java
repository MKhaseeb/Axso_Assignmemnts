package com.axsosacademy.mvc.repositories;


import com.axsosacademy.mvc.models.Travel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface TravelRepository  extends CrudRepository<Travel, Long> {
    List<Travel> findAll();
}
