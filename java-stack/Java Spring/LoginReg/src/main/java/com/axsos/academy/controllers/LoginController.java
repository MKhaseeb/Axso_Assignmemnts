package com.axsos.academy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsos.academy.models.LoginUser;
import com.axsos.academy.models.User;
import com.axsos.academy.services.LogRegService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class LoginController {
	
	
	 @Autowired
	 LogRegService logRegService;
	 
	    @GetMapping("/")
	    public String index(Model model) {
	    
	        // Bind empty User and LoginUser objects to the JSP
	        // to capture the form input
	        model.addAttribute("newUser", new User());
	        model.addAttribute("newLogin", new LoginUser());
	        return "index.jsp";
	    }
	    
	    @PostMapping("/register")
	    public String register(@Valid @ModelAttribute("newUser") User newUser, 
	            BindingResult result, Model model, HttpSession session) {
	        
	        // TO-DO Later -- call a register method in the service 
//	    	String passwordEntered = newUser.getPassword();
	        User reg = logRegService.register(newUser, result);

	        // to do some extra validations and create a new user!
	        
	        if(result.hasErrors()) {
	            // Be sure to send in the empty LoginUser before 
	            // re-rendering the page.
	            model.addAttribute("newLogin", new LoginUser());
	            return "index.jsp";
	        }
	        // No errors! 
	        // TO-DO Later: Store their ID from the DB in session, 
	        
	        session.setAttribute("userId", reg.getId());
	        // in other words, log them in.
	    
	        return "redirect:/";
	    }
	    
	    @PostMapping("/login")
	    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
	            BindingResult result, Model model, HttpSession session) {
	        
	        // Add once service is implemented:
	         User user = logRegService.login(newLogin, result);
	    
	        if(result.hasErrors()) {
	            model.addAttribute("newUser", new User());
	            return "index.jsp";
	        }
	    
	        // No errors! 
	        // TO-DO Later: Store their ID from the DB in session,
	        session.setAttribute("userName", user.getUserName());
	        session.setAttribute("userId", user.getId());

	        // in other words, log them in.
	    
	        return "redirect:/success";
	    }
	    
	    @GetMapping("/success")
	    public String success(HttpSession session,Model model) {
	        Long userId = (Long) session.getAttribute("userId");
	        
	        if (userId == null) {
	            return "redirect:/";
	            }
	        User loguser = logRegService.findUserById(userId);
	        model.addAttribute("user", loguser);
	    	return"succes.jsp";
	    }
	    
	    @GetMapping("/logout")
	    public String logout(HttpSession session) {
	        session.invalidate();
	        return "redirect:/";  
	    }

}
