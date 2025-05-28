package axsos.academ.services;

import java.util.List;

import java.util.Optional;

import org.springframework.stereotype.Service;



import axsos.academ.models.Burger;
import axsos.academ.repositories.BurgerRepository;

@Service
public class BurgerService {
    private final BurgerRepository burgerRepository;

    public BurgerService(BurgerRepository burgerRepository) {
        this.burgerRepository = burgerRepository;
    }

    public List<Burger> allBurgers() {
        return burgerRepository.findAll();
    }
    public Burger createBurger(Burger b) {
        return burgerRepository.save(b);
    }
}
