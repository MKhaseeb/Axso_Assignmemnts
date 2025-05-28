package com.khaseeb;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.RequestMapping;
import jakarta.servlet.http.HttpSession;

@org.springframework.stereotype.Controller
@SpringBootApplication
public class Controller {
	
	
    @RequestMapping("/")
    public String index(HttpSession session) {

    	   if (session.getAttribute("count") == null) {
    		   session.setAttribute("count" , 1);
    		   System.out.println("i'm here");
    	   }
    	   else {
    		  int count = (Integer) session.getAttribute("count");
    		   count++;
    		   session.setAttribute("count" , count);
    		   System.out.println("i did it ");
    	   }
           return "welcome.jsp";
    }
	
    @RequestMapping("/counter")
    public String welcome() {
    	
        return "index.jsp";
 
    	   
    }
    }

