package com.Khaseeb.routes;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class DaikichiController {
	@RequestMapping("")
	public String index() {
		return "hi";
	}
	
	@RequestMapping("daikichi")
	public String daikichi() {
		return "Welcome";
	}
	@RequestMapping("daikichi/today")
	public String tody() {
		return "Today you will find luck in all your endeavors!";
	}
	@RequestMapping("daikichi/tomorrow")
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
}
