package com.axsosacademy.mvc.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsosacademy.mvc.models.Dojo;
import com.axsosacademy.mvc.models.Ninja;
import com.axsosacademy.mvc.services.DojoService;
import com.axsosacademy.mvc.services.NinjaService;

import jakarta.validation.Valid;

@Controller
public class NinjaController {
    private final NinjaService ninjaService;
    private final DojoService dojoService;
    public NinjaController(NinjaService ninjaService, DojoService dojoService) {
        this.ninjaService = ninjaService;
        this.dojoService = dojoService;
    }
    
    	
    @GetMapping("/ninja")
    public String ninja(@ModelAttribute("ninja") Ninja ninja, Model model) {
        List<Dojo> dojos = dojoService.allDojos(); 
        model.addAttribute("dojos", dojos);
        return "createninja.jsp";
    }
        
    
//    @GetMapping("/dojos/{id}/ninjas/new")
//    public String newNinjaForm(@PathVariable("id") Long dojoId, Model model) {
//        Dojo dojo = dojoService.findbyid(dojoId);
//        model.addAttribute("dojo", dojo);
//        model.addAttribute("ninja", new Ninja());
//        return "createninja.jsp"; 
//    }
    
    @PostMapping("/dojos/ninjas/new")
    public String form(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
        if (result.hasErrors()) {
//            model.addAttribute("dojo", dojoService.findbyid(id));
              return "createninja.jsp";
          } else {
        	  ninjaService.createNinja(ninja);
//              Dojo dojo = dojoService.findbyid(id);
//              ninja.setDojo(dojo);
              return "redirect:/dojo";
    }
    
    }
}
