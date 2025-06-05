package com.axsosacademy.mvc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsosacademy.mvc.models.Dorm;
import com.axsosacademy.mvc.services.DormService;

import jakarta.validation.Valid;

@Controller
public class DormController {
	@Autowired
	DormService dormService;
	
	@GetMapping("/dorm")
	public String dorm(@ModelAttribute("dorm") Dorm dorm, BindingResult result, Model model) {
        List<Dorm> dorms = dormService.allDorm();
        model.addAttribute("dorms", dorms);
    	return"createdorm.jsp";
	}
	
    @PostMapping("/dorm/new")
    public String create(@Valid @ModelAttribute("dorm") Dorm dorm, BindingResult result, Model model) {
        if (result.hasErrors()) {
          model.addAttribute("dorms", dormService.allDorm());
            return "createdojo.jsp";
        } else {
        	dormService.createDorm(dorm);
            return "redirect:/dorm";
        }
    }



}
