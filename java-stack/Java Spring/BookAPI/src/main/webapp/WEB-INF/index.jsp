<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>All books</title>
</head>
<body>
<h1>All Books</h1>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Language</th>
            <th>description</th>
            <th>Number of Pages</th>
        </tr>
    </thead>
    <tbody>
         <c:forEach var="books" items="${books}">
            <tr>
            <td><c:out value="${books.id}" /></td>
                <td><c:out value="${books.title}" /></td>
                <td><c:out value="${books.language}" /></td>
                <td><c:out value="${books.description}" /></td>
                <td><c:out value="${books.numberOfPages}" /></td>
            </tr>
        </c:forEach>
    </tbody>
</table>

    <form action="/new" method="post">


        <label for="title">Title: </label>
        <input type="text" name="title" value="title">

        <label for="language">Language: </label>
        <input type="text" name="language" value="language">

        <label for="description">Description: </label>
        <input type="text" name="description" value="description">


        <label for="numberOfPages">Pages: </label>
        <input type="number" name="pages" value="numberOfPages">
        
        <button type="submit">Submit</button>
    </form>

</body>
</html>