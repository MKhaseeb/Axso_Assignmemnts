package com.khaseeb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@SpringBootApplication
@Controller
public class SimpleRecepitApplication {

	public static void main(String[] args) {
		SpringApplication.run(SimpleRecepitApplication.class, args);
	}
	@RequestMapping("/")
	public String index(Model model) {
        String name = "Grace Hopper";
        String itemName = "Copper wire";
        double price = 5.25;
        String description = "Metal strips, also an illustration of nanoseconds.";
        String vendor = "Little Things Corner Store";
        
        model.addAttribute("name",name);
        model.addAttribute("item",itemName);
        model.addAttribute("price",price);
        model.addAttribute("desc",description);
        model.addAttribute("vendor",vendor);
        	
        
        
		return "index.jsp";
	}

}
