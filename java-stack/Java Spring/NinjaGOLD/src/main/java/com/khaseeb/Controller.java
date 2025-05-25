package com.khaseeb;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.RequestMethod;


@org.springframework.stereotype.Controller
public class Controller {
	  @RequestMapping("/")
	  public String index(Model model, HttpSession session) {
			 String Farm = (String) session.getAttribute("Farm");
			 String Cave = (String) session.getAttribute("Cave");
			 String House = (String) session.getAttribute("House");
			 String Quest = (String) session.getAttribute("Quest");
		     Integer totalGold = (Integer) session.getAttribute("totalGold");
			 model.addAttribute("Farm", Farm);
//			 model.addAttribute("totalGold", totalGold);
			 model.addAttribute("Cave", Cave);
			 model.addAttribute("House", House);
			 model.addAttribute("Quest", Quest);
			 
		  return "index.jsp";
	  }
	  
	  @PostMapping("/counter")
	  public String goldCounter(Model model, HttpSession session,
	      @RequestParam(value="Farm", required = false) String farm,
	      @RequestParam(value="Cave", required = false) String cave,
	      @RequestParam(value="House", required = false) String house,
	      @RequestParam(value="Quest", required = false) String quest) {

	      int gold = 0;
	        if ("Cave".equals(cave)) {
	            gold = (int) (Math.random() * 11) + 10; 
	        }

	        Integer totalGold = (Integer) session.getAttribute("totalGold");
	        if (totalGold == null) {
	            totalGold = 0;
	        }

	        totalGold += gold;
//	        session.setAttribute("totalGold", totalGold);

	        return "redirect:/";
	    }

	  
}
