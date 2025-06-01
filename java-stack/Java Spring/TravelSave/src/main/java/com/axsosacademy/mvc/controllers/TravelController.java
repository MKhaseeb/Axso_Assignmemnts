package com.axsosacademy.mvc.controllers;

import com.axsosacademy.mvc.models.Travel;

import com.axsosacademy.mvc.services.TravelService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
public class TravelController {
    private final TravelService travelService;
    public TravelController(TravelService travelService) {
        this.travelService = travelService;
    }

    @GetMapping("/travel")
    public String newBook(@ModelAttribute("travel") Travel travel , Model model) {
        List<Travel> travels = travelService.allTravels();
        model.addAttribute("travels", travels);
        return "new.jsp";
    }

    @PostMapping("/travel/new")
    public String create(@Valid @ModelAttribute("travel") Travel travel, BindingResult result, Model model) {
        List<Travel> travels = travelService.allTravels();
        model.addAttribute("travels", travels);
        if (result.hasErrors()) {
            return "new.jsp";
        } else {
            travelService.createTravel(travel);
            return "redirect:/travel";
        }

    }
    @RequestMapping("/travel/new/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model
    ) {

        Travel travel = travelService.findTravel(id);
        model.addAttribute("travel", travel);
        return "edit.jsp";
    }
    @PostMapping("/travel/new/{id}")
    public String update(@PathVariable("id") Long id, Model model,
                         @RequestParam(value="expense") String expense,
                         @RequestParam(value="vendor") String vendor,
                         @RequestParam(value="description") String description,
                         @RequestParam(value="amount") Integer amount) {
        travelService.updateTravel( id, expense, vendor, description, amount);
        return "redirect:/travel";

        

    }
    @GetMapping("/travel/new/{id}/delete")
    public String destroy(@PathVariable("id") Long id) {
    	travelService.deleteTravel(id);
        return "redirect:/travel";
    }
    @GetMapping("/travel/{id}")
    public String showTravel(@PathVariable("id") Long id, Model model) {
        Travel travel = travelService.findTravel(id);
        model.addAttribute("travel", travel);
        return "disc.jsp";
    }

}
