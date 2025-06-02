package com.axsosacademy.mvc.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.axsosacademy.mvc.models.Ninja;
import com.axsosacademy.mvc.repositories.NinjaRepository;

@Service
public class NinjaService {
    private final NinjaRepository ninjaRepository;
    public NinjaService(NinjaRepository ninjaRepository) {
        this.ninjaRepository = ninjaRepository;
    }
	
    public List<Ninja> allninjas() {
        return ninjaRepository.findAll();
    }

    public Ninja createNinja(Ninja ninja) {
        return ninjaRepository.save(ninja);
    }
}
