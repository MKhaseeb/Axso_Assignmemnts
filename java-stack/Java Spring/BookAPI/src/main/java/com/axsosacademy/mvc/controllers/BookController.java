package com.axsosacademy.mvc.controllers;

import java.util.ArrayList;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.axsosacademy.mvc.services.BookService;



import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpSession;

import com.axsosacademy.mvc.models.Book;
import com.axsosacademy.mvc.services.BookService;
@Controller
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

	
    @RequestMapping("/api/books/{id}")
    public String show(HttpSession session,Model model,@PathVariable("id")
//    @RequestParam(value="title") String title,
//    @RequestParam(value="description") String desc,
//    @RequestParam(value="language") String lang, @RequestParam(value="pages") Integer numOfPages,
    Long id) {
        Book book = bookService.findBook(id);
        ArrayList<Item> books = new ArrayList<Item>();
//        session.setAttribute("title",title );
        model.addAttribute("book", book);
        
        return "show.jsp";
    }
	
	
	
//    private final BookService bookService;
//    public BooksApi(BookService bookService){
//        this.bookService = bookService;
//    }
}
