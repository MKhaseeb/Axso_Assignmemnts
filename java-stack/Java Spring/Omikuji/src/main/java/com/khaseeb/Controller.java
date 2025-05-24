package com.khaseeb;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@org.springframework.stereotype.Controller
@SpringBootApplication
public class Controller {

	@RequestMapping("/")
	public String index() {

		return "index.jsp";
		
	}
	
	@RequestMapping("/show")
	public String show(Model model , HttpSession session) {
		 String name = (String) session.getAttribute("name");
		 String dropdown = (String) session.getAttribute("dropdown");
		 String hobby = (String) session.getAttribute("hobby");
		 String thing = (String) session.getAttribute("thing");
		 String nice = (String) session.getAttribute("nice");
		 String city = (String) session.getAttribute("city");
		 model.addAttribute("name", name);
		 model.addAttribute("dropdown", dropdown);
		 model.addAttribute("hobby", hobby);
		 model.addAttribute("thing", thing);
		 model.addAttribute("nice", nice);
		 model.addAttribute("city", city);
		 
		 return "show.jsp";
	}
	
	@PostMapping("/latter")
	public String latter(HttpSession session,
	    @RequestParam(value="dropdown") String dropdown,
	    @RequestParam(value="name") String name,
	    @RequestParam(value="hobby") String hobby,
	    @RequestParam(value="thing") String thing,
	    @RequestParam(value="nice") String nice,
	    @RequestParam(value="city") String city) {
		  System.out.println(name);
		  System.out.println(thing);
	        session.setAttribute("name",name );
	        session.setAttribute("dropdown",dropdown );
	        session.setAttribute("hobby",hobby );
	        session.setAttribute("thing",thing );
	        session.setAttribute("nice",nice );
	        session.setAttribute("city",city );
	        
	    
	        
	        return "redirect:/show"; 
	}
	
}
