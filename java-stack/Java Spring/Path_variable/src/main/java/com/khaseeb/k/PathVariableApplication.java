package com.khaseeb.k;


import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class PathVariableApplication {

	public static void main(String[] args) {
		SpringApplication.run(PathVariableApplication.class, args);
	}
	
	@RequestMapping("")
	public String index() {
		return "hi";
	}
	
		@RequestMapping("/m/doikichi/travel/{moduleId}")
		public String showLesson( @PathVariable("moduleId") String moduleId){
			return " Gongrats! You will soon travel to " + moduleId;
    }
		@RequestMapping("m/doikichi/{val}")
		public String showInt( @PathVariable("val") int val ){
			if(val %2 == 0) {
				return "You have enjoyed the fruits of your labor, but now is a great time to spend time with family and friends.";
			}
			else {
				
				return "You will take a grand journey in the near future but be wary of tempting offers." + val;
			}
    }
}
