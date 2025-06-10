package com.axsosacademy.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import com.axsosacademy.repositories.BookRepository;
import com.axsosacademy.repositories.LogRegRepository;
import com.axsosacademy.services.BookService;
import com.axsosacademy.services.LogRegService;

public class BookController {
	@Autowired
	BookService bookService;
	@Autowired
	LogRegService logRegService;
	

}
