package com.axsosacademy.mvc.controllers;
import java.util.List;


import com.axsosacademy.mvc.models.Burger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import com.axsosacademy.mvc.services.BurgerService;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@Controller
public class BurgerController {
    private final BurgerService burgerService;

    public BurgerController(BurgerService burgerService) {
        this.burgerService = burgerService;
    }

    
    @GetMapping("/burgers")
    public String newBook(@ModelAttribute("burger") Burger burger , Model model) {
        List<Burger> burgers = burgerService.allBurgers();
        model.addAttribute("burgers", burgers);
        return "new.jsp";
    }

    @PostMapping("/burgers/new")
    public String create(@Valid @ModelAttribute("burger") Burger burger, BindingResult result, Model model) {
        List<Burger> burgers = burgerService.allBurgers();
        model.addAttribute("burgers", burgers);
        if (result.hasErrors()) {
            return "new.jsp";
        } else {
            burgerService.createBurger(burger);
            return "redirect:/burgers";
        }
    }
    @RequestMapping("/burgers/new/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model
    ) {

        Burger burger = burgerService.findBurger(id);
        model.addAttribute("burger", burger);
        return "edit.jsp";
    }
    @PostMapping("/burgers/new/{id}")
        public String update(@PathVariable("id") Long id, Model model,
                             @RequestParam(value="name") String name,
                             @RequestParam(value="restaurant") String restaurant,
                             @RequestParam(value="note") String note,
                             @RequestParam(value="rating") Integer rating) {
        burgerService.updateBurger( id, name, restaurant, note, rating);
        return "redirect:/burgers";


    }

}
