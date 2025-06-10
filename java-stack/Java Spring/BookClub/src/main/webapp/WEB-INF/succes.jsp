<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	 <h1>Welcome, ${user.userName}!</h1>
	 <a href="/books/new"> + Add to my shelf</a>
	 <table border="1" cellpadding="10">
	     <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author Name</th>
            <th>Posted by</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach var="books" items="${books}">
            <tr>
            	<td><c:out value="${books.id}" /></td>
                <td><c:out value="${books.title}" /></td>
                <td><c:out value="${books.author}" /></td>
                <td><c:out value="${books.user.userName}" /></td>	
            </tr>
        </c:forEach>
    </tbody>
    </table>
	<h3><a href="/logout" class="btn btn-danger">Logout</a></h3>
</body>
</html>