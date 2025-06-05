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
	<h1>Dorm</h1>
	<a href="/dorm">Add a new dorm</a>
	<a href="/student">Add a new student</a>
	
		<table border="1" cellpadding="10">
    <thead>
        <tr>
            <th>Dorm</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach var="dorm" items="${dorms}">
            <tr>
                <td><c:out value="${dorm.name}" /></td>
                <td> <a href="/dorm/${dorm.id}"><c:out value="See Students" /></a></td>
            </tr>
        </c:forEach>
    </tbody>
</table>
</body>
</html>