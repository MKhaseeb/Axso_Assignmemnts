package com.axsosacademy.mvc.controllers;
import java.util.List;

import java.lang.ProcessBuilder.Redirect;

import java.util.ArrayList;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import com.axsosacademy.mvc.services.BookService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

import com.axsosacademy.mvc.models.Book;
import com.axsosacademy.mvc.services.BookService;
@Controller
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

	
//    @RequestMapping("/api/books/{id}")
//    public String show(HttpSession session,Model model,@PathVariable("id")
////    @RequestParam(value="title") String title,
////    @RequestParam(value="description") String desc,
////    @RequestParam(value="language") String lang, @RequestParam(value="pages") Integer numOfPages,
//    Long id) {
//        Book book = bookService.findBook(id);
//        ArrayList<Item> books = new ArrayList<Item>();
////        session.setAttribute("title",title );
//        model.addAttribute("book", book);
//
//        return "show.jsp";
//    }
    
//    @RequestMapping("/books")
//    public String index(Model model) {
//        List<Book> books = bookService.allBooks();
//        model.addAttribute("books", books);
//        return "index.jsp";
//    }
    
    
//    @GetMapping("/newbook")
    
    
//    @PostMapping("/new")
//    public String newBook(HttpSession session,
//    	    @RequestParam("title") String title,
//    	    @RequestParam("description") String description,
//    	    @RequestParam("language") String language,
//    	    @RequestParam("pages") Integer pages) {
////    	session.setAttribute("title",title );
////    	session.setAttribute("description",description );
////    	Integer pagess = (Integer) session.getAttribute("pages");
////    	session.setAttribute("language",language );
////    	session.setAttribute("pages",pages );
//    	 Book book = new Book(title, description, language, pages);
//    	 bookService.createBook(book);
//    	 
//    	 return "redirect:/books";
//    }
    
    @GetMapping("/books/new")
    public String newBook(@ModelAttribute("book") Book book) {
        return "new.jsp";
    }
    @PostMapping("/books")
    public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "new.jsp";
        } else {
            bookService.createBook(book);
            return "redirect:/books";
        }
    }
    
	
	
	
//    private final BookService bookService;
//    public BooksApi(BookService bookService){
//        this.bookService = bookService;
//    }
}
