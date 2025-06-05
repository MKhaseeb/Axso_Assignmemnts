package com.axsosacademy.mvc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsosacademy.mvc.models.Dorm;
import com.axsosacademy.mvc.models.Student;
import com.axsosacademy.mvc.repositories.StudentRepository;
import com.axsosacademy.mvc.services.DormService;
import com.axsosacademy.mvc.services.StudentService;

import jakarta.validation.Valid;

@Controller
public class StudentController {
	
	@Autowired
	StudentService studentService;

	@Autowired
	DormService dormService;
	
    @GetMapping("/student")
    public String Student(@ModelAttribute("student") Student student, Model model) {
        List<Dorm> dorms = dormService.allDorm(); 
        model.addAttribute("dorms", dorms);
        return "createstudent.jsp";
    }
    
    @PostMapping("/dorm/student/new")
    public String form(@Valid @ModelAttribute("student") Student student, BindingResult result, Model model) {
        if (result.hasErrors()) {
              return "createstudent.jsp";
          } else {
        	  studentService.createStudent(student);
              return "redirect:/student";
    }
        

    }

    @GetMapping("/")
    public String home(Model model) {
        List<Dorm> dorms = dormService.allDorm(); 
        model.addAttribute("dorms", dorms);
    	return"home.jsp" ;
}        
    @GetMapping("/dorm/{id}")
    public String show(@ModelAttribute("studentt") Student student, @PathVariable("id")Long dorm_id, Model model) {
    	Dorm dorms = dormService.findbyid(dorm_id);
        List<Dorm> dormsss = dormService.allDorm(); 
        model.addAttribute("dorms", dorms);
//        model.addAttribute("dormsss", dormsss);
        List<Student> students = studentService.allStudent(); 
        model.addAttribute("students", students);
        
        return "editdorm.jsp";
    }
    
    @PostMapping("/dorm/{id}/add-student")
    public String addStudentToDorm(@PathVariable("id") Long dormId, @ModelAttribute("studentt") Student student, Model model) {
        Dorm dorm = dormService.findbyid(dormId);
        Student student1 = studentService.findbyid(student.getId());
        student1.setDorm(dorm);
        studentService.createStudent(student1);
        return "redirect:/dorm/" + dormId;
    }
    
    @DeleteMapping("/dorm/{dorm_id}/delete")
    public String destroy(@PathVariable("dorm_id") Long std_id) {
    	studentService.deleteDormStudent(std_id);
        return "redirect:/";
    }
}
