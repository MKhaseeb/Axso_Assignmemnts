package com.axsos.academy.Controllers;

import java.security.Principal;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsos.academy.Models.LoginUser;
import com.axsos.academy.Models.Tree;
import com.axsos.academy.Models.User;
import com.axsos.academy.Services.LogRegService;
import com.axsos.academy.Services.TreeService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class LoginController {
	
	
	 @Autowired
	 LogRegService logRegService;
	 
	 @Autowired
	 TreeService treeService;
	 
	 
	 
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
	    
	        session.setAttribute("userName", user.getFirstname());
	        session.setAttribute("userId", user.getId());

	    
	        return "redirect:/home";
	    }
	    
	    @GetMapping("/home")
	    public String home(HttpSession session,Model model) {
	        Long userId = (Long) session.getAttribute("userId");
	        if (userId == null) {
	            return "redirect:/";
	            }
	        List<Tree> trees = treeService.allTrees();
	        User user = logRegService.findUserById(userId);
	        model.addAttribute("user", user);
	        model.addAttribute("trees", trees);
	    	return"home.jsp";
	    }
	    
	    @GetMapping("/logout")
	    public String logout(HttpSession session) {
	        session.invalidate();
	        return "redirect:/";  
	    }
	    
	    @GetMapping("/trees")
	    public String tree(@ModelAttribute("newTree") Tree tree, BindingResult result, Model model) {
	    	return"createtree.jsp";
	    }
	    @PostMapping("/trees/new")
	    public String newtree(@Valid @ModelAttribute("newTree") Tree tree, BindingResult result, HttpSession session, Model model) {
	        if (result.hasErrors()) {
	            return "createtree.jsp";
	        }
            Long userId = (Long) session.getAttribute("userId");
            User user = logRegService.findUserById(userId);
            tree.setUser(user);
	        treeService.createTree(tree);
	        return"redirect:/home";
	        
	    }
	    
	    @GetMapping("/trees/{id}")
	     public String treeinfo(@PathVariable("id")  Long id, Tree tree, Principal principal, Model model,HttpSession session) {
	    	Tree trees = treeService.findbyid(id);
	    	Long userId = (Long) session.getAttribute("userId");
	    	
	        model.addAttribute("trees", trees);
	        return"treeinfo.jsp";

	    }
	    
	    @GetMapping("trees/{id}/edit")
	     public String treeedit( @ModelAttribute("updatetree") @PathVariable("id")  Long id, Tree tree, Model model,HttpSession session) {
	    	Tree trees = treeService.findbyid(id);
	        Long userId = (Long) session.getAttribute("userId");
	        
	        if (!trees.getUser().getId().equals(userId)) {
	            return "redirect:/home";
	    }
	        model.addAttribute("updatetree", trees);
	        return"treeupdate.jsp";
	    }
	    
	    
	    
	    @PostMapping("trees/{id}/update")
	    public String updateTree(@Valid @ModelAttribute("updatetree") @PathVariable Long id,Tree tree,BindingResult result
                ) {
	        if (result.hasErrors()) {
	            return "treeupdate.jsp";
	        }
	        treeService.updateBook(id, tree.getSpecies(), tree.getLocation(), tree.getNote(),tree.getZipCode(), tree.getDate());
	    	return "redirect:/home";

	    
	    
}
	    
	    @GetMapping("/zip/{zipCode_id}/trees")
	    public String treesByZip(@PathVariable("zipCode_id") String zipCode, Model model) {
	        List<Tree> trees = treeService.findByZip(zipCode);
	        model.addAttribute("trees", trees);
	        model.addAttribute("zipCode", zipCode);
	        return "treebycode.jsp";
	    }
	 
	    
}
	    
   



