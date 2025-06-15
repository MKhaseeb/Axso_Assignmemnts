package com.axsos.academy.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsos.academy.Models.Project;
import com.axsos.academy.Models.User;
import com.axsos.academy.Services.LogRegService;
import com.axsos.academy.Services.ProjectService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class ProjectController {

	@Autowired
	ProjectService projectService;
	@Autowired
	LogRegService logRegService;
	
    @PostMapping("/project/new")
    public String newtree(@Valid @ModelAttribute("newProject") Project project, BindingResult result, HttpSession session, Model model) {
        if (result.hasErrors()) {
            return "createproject.jsp";
        }
        Long userId = (Long) session.getAttribute("userId");
        User user = logRegService.findUserById(userId);
        project.setUser(user);
        projectService.createProject(project);
        return"redirect:/home";
        
    }
    
    @GetMapping("/project")
    public String tree(@ModelAttribute("newProject") Project project, BindingResult result, Model model) {
    	return"createproject.jsp";
    }
    
    @GetMapping("/project/{id}")
    public String projectinfo(@PathVariable("id")  Long id, Project project, Model model,HttpSession session) {
    	Project projects = projectService.findbyid(id);
        Long userId = (Long) session.getAttribute("userId");
        User user = logRegService.findUserById(userId);
    	
    	model.addAttribute("project", projects);
    	model.addAttribute("user", user);
    	return"projectinfo.jsp";
    }
    
    @GetMapping("/project/{id}/edit")
    public String projectedit( @ModelAttribute("updateProject") @PathVariable("id")  Long id, Project project, Model model,HttpSession session) {
    	Project projects = projectService.findbyid(id);
        Long userId = (Long) session.getAttribute("userId");
        
        model.addAttribute("updateProject", projects);
    	return"updateproject.jsp";
    }
    
    @PostMapping("/project/{id}/update")
    public String projectupdate( @PathVariable Long id, @Valid @ModelAttribute("updateProject")Project project,BindingResult result) {
        if (result.hasErrors()) {
            return "updateproject.jsp";
        }
        projectService.updateProject(id, project.getName(), project.getDescription(), project.getStartdate(),project.getEnddate());
    	return "redirect:/home";
    }
    	
    @GetMapping("/project/{id}/join")
    public String joinProject(@PathVariable Long id, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        projectService.joinProject(userId, id);
        return "redirect:/home";
    }
    
    @GetMapping("/project/{id}/separate")
    public String separateProject(@PathVariable Long id, HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");
        projectService.separateProject(userId, id);
        return "redirect:/home";
    }


    
}
	