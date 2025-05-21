package com.khaseeb.k;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class HelloHumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloHumanApplication.class, args);
	}
	@RequestMapping("")
	public String index() {
		return "try /search?q=example";
	}
	
    @RequestMapping("/search")
    public String index(@RequestParam(value = "q", required = false, defaultValue = "nothing") String searchQuery) {
        return "You searched for: " + searchQuery;
}
}

	


