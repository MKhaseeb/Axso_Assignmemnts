package com.axsosacademy.mvc.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axsosacademy.mvc.models.Student;
import com.axsosacademy.mvc.repositories.StudentRepository;


@Service
public class StudentService {
	@Autowired
	StudentRepository studentRepository;
	
    public Student findbyid(long dorm_id) {
        return studentRepository.findById(dorm_id).orElse(null);
    }
    
    public List<Student> allStudent() {
        return studentRepository.findAll();
    }

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }
	public Student deleteDormStudent(Long dorm_id ) {
		System.out.println("i'm in");
		Student student1 = studentRepository.findById(dorm_id).orElse(null);
				student1.setDorm(null);
		return studentRepository.save(student1);
	}
	
	public Student addStudenttoDorm()lo
//	public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
//		Book book = bookRepository.findById(id).orElse(null);
//		book.setTitle(title);
//		book.setDescription(desc);
//		book.setLanguage(lang);
//		book.setNumberOfPages(numOfPages);
//		return bookRepository.save(book);
//	}
   

}
