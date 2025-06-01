package com.axsosacademy.mvc.repositories;

import java.util.List;


import com.axsosacademy.mvc.models.Burger;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BurgerRepository extends CrudRepository<Burger, Long>{
    List<Burger> findAll();
}
