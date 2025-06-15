package com.axsos.academy.Services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axsos.academy.Models.Tree;
import com.axsos.academy.Repositories.TreeRepository;

@Service
public class TreeService {
	
	@Autowired
	TreeRepository treeRepository;
	
    public Tree createTree(Tree tree) {
        return treeRepository.save(tree);
    }
    
    public List<Tree> allTrees() {
        return treeRepository.findAll();
    }
    
    public Tree findbyid(long user_id) {
        return treeRepository.findById(user_id).orElse(null);
    }
    public List<Tree> findByZip(String zipCode_id) {
        return treeRepository.findByZipCode(zipCode_id);
    }
    
	public Tree updateBook(Long id, String species, String location, String note, String zipCode, Date date) {
		Tree tree = treeRepository.findById(id).orElse(null);
		tree.setSpecies(species);
		tree.setLocation(location);
		tree.setNote(note);
		tree.setDate(date);
		tree.setZipCode(zipCode);
		return treeRepository.save(tree);
	}
    
}
