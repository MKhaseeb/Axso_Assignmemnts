package com.khaseeb;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.boot.SpringApplication; 
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@SpringBootApplication
@Controller
public class DisplayDateApplication {

	public static void main(String[] args) {
		SpringApplication.run(DisplayDateApplication.class, args);
	}

	@RequestMapping("")
	public String index() {
		return "index.jsp";
		
	}
	@RequestMapping("date")
	public String date() {
		return "date.jsp";
		
	}

	@RequestMapping("time")
	public String time(Model model) {
		return "time.jsp";
		
	}


}
