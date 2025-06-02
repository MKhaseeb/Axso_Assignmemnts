package com.axsosacademy.mvc.controllers;

import java.util.List;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.axsosacademy.mvc.models.Dojo;
import com.axsosacademy.mvc.repositories.DojoRepository;
import com.axsosacademy.mvc.services.DojoService;

import jakarta.validation.Valid;

@Controller
public class DojoController {
    private final DojoService dojoService;
    public DojoController(DojoService dojoService) {
        this.dojoService = dojoService;
    }
    
    @GetMapping("/dojo")
    public String dojo( @ModelAttribute("dojo") Dojo dojo, BindingResult result, Model model) {
        List<Dojo> dojos = dojoService.allDojos();
        model.addAttribute("dojos", dojos);
    	return"createdojo.jsp";
    }
    
    @PostMapping("/dojo/new")
    public String create(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result, Model model) {
        if (result.hasErrors()) {
          model.addAttribute("Dojo", dojoService.allDojos());
            return "createdojo.jsp";
        } else {
        	dojoService.createDojo(dojo);
            return "redirect:/dojo";
        }
  
    }
    

//    @GetMapping("/dojo/{dojo_id}")
//    public String showDojo(@PathVariable Long dojo_id, Model model) {
//        
//        Dojo dojo = dojoService.findbyid(dojo_id);
//        model.addAttribute("Dojo", dojo);
//        
//        return "createdojo.jsp";
//    }
 }

