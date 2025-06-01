package com.axsosacademy.mvc.services;

import java.util.List;

import java.util.Optional;

import com.axsosacademy.mvc.models.Burger;
import org.springframework.stereotype.Service;

import com.axsosacademy.mvc.repositories.BurgerRepository;
@Service
public class BurgerService {
    // adding the book repository as a dependency
    private final BurgerRepository burgerRepository;

    public BurgerService(BurgerRepository burgerRepository) {
        this.burgerRepository = burgerRepository;
    }
    // returns all the books
    public List<Burger> allBurgers() {
        return burgerRepository.findAll();
    }
    // creates a book
    public Burger createBurger(Burger b) {
        return burgerRepository.save(b);
    }
    // retrieves a book
    public Burger findBurger(Long id) {
        Optional<Burger> optionalBook = burgerRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
	public void deleteBurger(Long id) {
        burgerRepository.deleteById(id);
	}
	public Burger updateBurger(Long id, String name, String restaurant, String note, Integer rating) {
		Burger burger = burgerRepository.findById(id).orElse(null);
		burger.setName(name);
		burger.setRestaurant(restaurant);
		burger.setNote(note);
		burger.setRating(rating);
		return burgerRepository.save(burger);
	}


}
