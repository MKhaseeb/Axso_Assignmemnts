package com.axsosacademy.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsosacademy.models.Book;
import com.axsosacademy.models.LoginUser;
import com.axsosacademy.models.User;
import com.axsosacademy.repositories.BookRepository;
import com.axsosacademy.services.BookService;
import com.axsosacademy.services.LogRegService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class LoginController {
	
	
	 @Autowired
	 LogRegService logRegService;
	@Autowired
	BookService bookService;
	 
	    @GetMapping("/")
	    public String index(Model model) {
	    
	        model.addAttribute("newUser", new User());
	        model.addAttribute("newLogin", new LoginUser());
	        return "index.jsp";
	    }
	    
	    @PostMapping("/register")
	    public String register(@Valid @ModelAttribute("newUser") User newUser, 
	            BindingResult result, Model model, HttpSession session) {
	        
	        User reg = logRegService.register(newUser, result);

	        
	        if(result.hasErrors()) {
	            model.addAttribute("newLogin", new LoginUser());
	            return "index.jsp";
	        }
	        
	        session.setAttribute("userId", reg.getId());
	    
	        return "redirect:/";
	    }
	    
	    @PostMapping("/login")
	    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
	            BindingResult result, Model model, HttpSession session) {
	        
	         User user = logRegService.login(newLogin, result);
	    
	        if(result.hasErrors()) {
	            model.addAttribute("newUser", new User());
	            return "index.jsp";
	        }
	    
	        session.setAttribute("userName", user.getUserName());
	        session.setAttribute("userId", user.getId());
	    
	        return "redirect:/success";
	    }
	    
	    @GetMapping("/success")
	    public String success(HttpSession session,Model model) {
	        Long userId = (Long) session.getAttribute("userId");
	        
	        if (userId == null) {
	            return "redirect:/";
	            }
	        List<Book> books = bookService.allBook();
	        List<User> users = logRegService.allUser();
	        User loguser = logRegService.findUserById(userId);
	        model.addAttribute("user", loguser);
	        model.addAttribute("books", books);
	        model.addAttribute("users", users);
	    	return"succes.jsp";
	    }
	    
	    @GetMapping("/logout")
	    public String logout(HttpSession session) {
	        session.invalidate();
	        return "redirect:/";  
	    }
	    
	    @PostMapping("/book/new")
	    public String form(@Valid @ModelAttribute("newBook") Book book, BindingResult result, Model model) {
	        if (result.hasErrors()) {
	              return "createbook.jsp";
	          } else {
	        	  bookService.createBook(book);
	              return "redirect:/success";
	    }

	    }
	    @GetMapping("/books/new")
	    public String newbook(@ModelAttribute("newBook") Book book, BindingResult result, Model model) {
	    	return"createbook.jsp";
	    }
}

