package com.axsosacademy.mvc.services;
import java.util.List;

import com.axsosacademy.mvc.repositories.TravelRepository;
import org.aspectj.weaver.tools.Trace;
import com.axsosacademy.mvc.models.Travel;
import org.springframework.stereotype.Service;
import com.axsosacademy.mvc.repositories.TravelRepository;

import java.util.Optional;
@Service
public class TravelService {
    private final TravelRepository travelRepository;
    public TravelService(TravelRepository travelRepository) {
        this.travelRepository = travelRepository;
    }
    // returns all the books
    public List<Travel> allTravels() {
        return travelRepository.findAll();
    }
    // creates a book
    public Travel createTravel(Travel b) {
        return travelRepository.save(b);
    }
    // retrieves a book
    public Travel findTravel(Long id) {
        Optional<Travel> optionalTrace = travelRepository.findById(id);
        if(optionalTrace.isPresent()) {
            return optionalTrace.get();
        } else {
            return null;
        }
    }
    public void deleteTravel(Long id) {
        travelRepository.deleteById(id);
    }
    public Travel updateTravel(Long id, String expense, String vendor, String description, Integer amount) {
        Travel trace = travelRepository.findById(id).orElse(null);
        trace.setExpense(expense);
        trace.setVendor(vendor);
        trace.setDescription(description);
        trace.setAmount(amount);
        return travelRepository.save(trace);
    }
}
