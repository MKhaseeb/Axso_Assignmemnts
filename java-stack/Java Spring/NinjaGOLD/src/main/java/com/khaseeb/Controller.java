package com.khaseeb;

import org.springframework.boot.autoconfigure.SpringBootApplication;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;
import java.text.SimpleDateFormat;

@org.springframework.stereotype.Controller
public class Controller {
	  @RequestMapping("/")
	  public String index(Model model, HttpSession session) {
			 String Farm = (String) session.getAttribute("Farm");
			 String Cave = (String) session.getAttribute("Cave");
			 String House = (String) session.getAttribute("House");
			 String Quest = (String) session.getAttribute("Quest");
//		     Integer totalGold = (Integer) session.getAttribute("totalGold");
			 model.addAttribute("Farm", Farm);
			 model.addAttribute("Cave", Cave);
			 model.addAttribute("House", House);
			 model.addAttribute("Quest", Quest);
			 
			 return "index.jsp";
	  }
	  
	  
	  @PostMapping("/counter")
	  public String goldCounter( HttpSession session,
	      @RequestParam(value="Farm", required = false) String farm,
	      @RequestParam(value="Cave", required = false) String cave,
	      @RequestParam(value="House", required = false) String house,
	      @RequestParam(value="Quest", required = false) String quest) {

	      int gold = 0;
	      String location = "";
	      String log = "";
	        if ("Cave".equals(cave)) {
	            gold = (int) (Math.random() * 11) + 10; 
	        }
	        
	        if ("Farm".equals(farm)) {
	            gold = (int) (Math.random() * 11) + 10; 
	        }
	        
	        
	        if ("House".equals(house)) {
	            gold = (int) (Math.random() * 11) + 10; 
	        }
	        
	        
	        if ("Quest".equals(quest)) {
	            gold = (int) (Math.random() *101) - 50 ; 
	        }
	        
//	        String timeStamp = new SimpleDateFormat("MMMM d yyyy h:mm a").format(new Date());


	        Integer totalGold = (Integer) session.getAttribute("totalGold");
	        if (totalGold == null) {
	            totalGold = 0;
	        }

	        totalGold += gold;
	        session.setAttribute("totalGold", totalGold);
	        
//	        if (gold >= 0) {
//	            log = String.format("You entered a %s and earned %d gold. (%s)", location, gold, timeStamp);
//	        } else {
//	            log = String.format("You failed a %s and lost %d gold. Ouch. (%s)", location, Math.abs(gold), timeStamp);
//	        }
////	        
//	        List<String> activities = (List<String>) session.getAttribute("log");
//	        if (activities == null) {
//	            activities = new ArrayList<>();
//	            session.setAttribute("log", activities);
//	        }
//	        activities.add(0, log); // newest message at the top
//	        session.setAttribute("log", activities);

//
	        return "redirect:/";
	    }
	  

	  
}
