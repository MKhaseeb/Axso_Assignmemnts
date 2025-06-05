package com.axsosacademy.mvc.services;

import java.util.List;


import org.springframework.stereotype.Service;

import com.axsosacademy.mvc.models.Dojo;
import com.axsosacademy.mvc.repositories.DojoRepository;

@Service
public class DojoService  {
    private final DojoRepository dojoRepository;
    public DojoService(DojoRepository dojoRepository) {
        this.dojoRepository = dojoRepository;
    }
    public Dojo findbyid(long dojo_id) {
        return dojoRepository.findById(dojo_id).orElse(null);
    }
    
    public List<Dojo> allDojos() {
        return dojoRepository.findAll();
    }

    public Dojo createDojo(Dojo dojo) {
        return dojoRepository.save(dojo);
    }
    

    
    
    
}


