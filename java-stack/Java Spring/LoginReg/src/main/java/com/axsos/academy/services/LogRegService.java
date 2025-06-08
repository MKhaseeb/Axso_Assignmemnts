package com.axsos.academy.services;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
    
import  com.axsos.academy.models.LoginUser;
import  com.axsos.academy.models.User;    

import org.springframework.stereotype.Service;
import com.axsos.academy.repositories.LogRegRepository;

@Service
public class LogRegService {

	@Autowired
	LogRegRepository logRegRepository;
		
    public User register(User newUser, BindingResult result) {

        // TO-DO - Reject values or register if no errors:
        
        // Reject if email is taken (present in database)
    	Optional<User> potentialUser = logRegRepository.findByEmail(newUser.getEmail());
    		if (potentialUser.isPresent())
    			 result.rejectValue("email", "taken", "The Email is already taken");
        // Reject if password doesn't match confirmation
    	if(!newUser.getPassword().equals(newUser.getConfirm())) {
    	    result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
    	}
        // Return null if result has errors
    	if(result.hasErrors()) {
    	    return null;
    	}
        // Hash and set password, save user to database
    	String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    	newUser.setPassword(hashed);
    	
    	return logRegRepository.save(newUser);
    	
    }
    public User login(LoginUser newLoginObject, BindingResult result) {
    // TO-DO - Reject values:
    
    // Find user in the DB by email
    	Optional<User> potentialUser = logRegRepository.findByEmail(newLoginObject.getEmail());
    // Reject if NOT present
		if (!potentialUser.isPresent()) {
			 result.rejectValue("email", "null", "Email is not found");
		return null;
		
    }
		User user = potentialUser.get();
    // Reject if BCrypt password match fails
		if(!BCrypt.checkpw(newLoginObject.getPassword(), user.getPassword())) {
		    result.rejectValue("password", "Matches", "Invalid Password!");
		}

    // Return null if result has errors
    	if(result.hasErrors()) {
    	    return null;
    	}
    // Otherwise, return the user object
    	return user;
}
	public User findUserById(Long id) {
	    Optional<User> user = logRegRepository.findById(id);
	    return user.orElse(null);
	}

}
