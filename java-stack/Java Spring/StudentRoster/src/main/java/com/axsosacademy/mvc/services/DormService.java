package com.axsosacademy.mvc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axsosacademy.mvc.models.Dorm;
import com.axsosacademy.mvc.repositories.DormRepository;

@Service
public class DormService {
	@Autowired
	DormRepository dormRepository;
    public Dorm findbyid(long dorm_id) {
        return dormRepository.findById(dorm_id).orElse(null);
    }
    
    public List<Dorm> allDorm() {
        return dormRepository.findAll();
    }

    public Dorm createDorm(Dorm dorm) {
        return dormRepository.save(dorm);
    }
	public void deleteDormStudent(Long id) {
		dormRepository.deleteById(id);
	}
}
