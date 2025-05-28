package axsos.academ.controllers;

import java.util.List;

import java.lang.ProcessBuilder.Redirect;
import java.util.ArrayList;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

//import com.axsosacademy.mvc.services.BookService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



//import com.axsosacademy.mvc.services.BookService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import axsos.academ.models.Burger;
import axsos.academ.repositories.BurgerRepository;

import axsos.academ.models.Burger;
//import com.axsosacademy.mvc.services.BookService;
import axsos.academ.repositories.BurgerRepository;
import axsos.academ.services.BurgerService;


@Controller
public class BurgerConttroller {
    private final BurgerService burgerService;

    public BurgerConttroller(BurgerService burgerService) {
        this.burgerService = burgerService; 
    }
    @GetMapping("/")
    public String newBurger(@ModelAttribute("newburgerr") Burger burger,Model model) {
        List<Burger> allBurgers = burgerService.allBurgers();
        model.addAttribute("burgers", allBurgers);
        return "index.jsp";
    }
    @PostMapping("/newburger")
    public String create(@Valid @ModelAttribute("newburgerr") Burger burger, BindingResult result, Model model) {
        if (result.hasErrors()) {
        	model.addAttribute("burgers", burgerService.allBurgers());
            return "index.jsp";
        } else {
        	burgerService.createBurger(burger);
            return "redirect:/";
        }
    }
}
