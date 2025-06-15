package com.axsos.academy.Services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axsos.academy.Models.Project;
import com.axsos.academy.Models.User;
import com.axsos.academy.Repositories.LogRegRepository;
import com.axsos.academy.Repositories.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	ProjectRepository  projectRepository;
	
	@Autowired
	LogRegRepository logRegRepository;
	
	
    public Project createProject(Project project) {
        return projectRepository.save(project);
    }
    
    public List<Project> allProject() {
        return projectRepository.findAll();
    }
    
    public Project findbyid(long user_id) {
        return projectRepository.findById(user_id).orElse(null);
    }
    
	public Project updateProject(Long id, String name, String description , Date startdate, Date enddate) {
		Project project = projectRepository.findById(id).orElse(null);
		project.setName(name);
		project.setDescription(description);
		project.setStartdate(startdate);
		project.setEnddate(enddate);
		return projectRepository.save(project);
	}
	
	public void joinProject(Long userId, Long projectId) {
	    User user = logRegRepository.findById(userId).orElse(null);
	    Project project = projectRepository.findById(projectId).orElse(null);
	    if (!project.getJoinedUsers().contains(user)) {
	        project.getJoinedUsers().add(user);
	        projectRepository.save(project);
	    }
	}
	public void separateProject(Long userId, Long projectId) {
	    User user = logRegRepository.findById(userId).orElse(null);
	    Project project = projectRepository.findById(projectId).orElse(null);

	    if (user != null && project != null && project.getJoinedUsers().contains(user)) {
	        project.getJoinedUsers().remove(user);
	        projectRepository.save(project);
	    }
	}

	public void deleteProject(Long id) {
		projectRepository.deleteById(id);
}



}

    

