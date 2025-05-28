<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>  
            <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Burger Tracker</title>
</head>
<body>
	<h1>Burger Tracker</h1>
<table>
    <thead>
        <tr>
            <th>Burger Name</th>
            <th>Restaurant Name</th>
            <th>Rating</th>
        </tr>
    </thead>
    <tbody>
    <c:forEach var="burger" items="${burgers}">
        <tr>
            <td><c:out value="${burger.burgername}" /></td>
            <td><c:out value="${burger.restaurantname}" /></td>
            <td><c:out value="${burger.rating}" /></td>
        </tr>
    </c:forEach>
    </tbody>
</table>

 <h1>Add a Burger</h1>
 <form:form action="/newburger" method="post" modelAttribute="newburgerr">
    <p>
        <form:label path="burgername">Burger Name</form:label>
        <form:errors path="burgername"/>
        <form:input path="burgername"/>
    </p>
    <p>
        <form:label path="restaurantname">Restaurant Name</form:label>
        <form:errors path="restaurantname"/>
        <form:textarea path="restaurantname"/>
    </p>
    <p>
        <form:label path="rating">Rating</form:label>
        <form:errors path="rating"/>     
        <form:input type="number" path="rating"/>
    </p>
      <p>
        <form:label path="note">Notes</form:label>
        <form:errors path="note"/>
        <form:input path="note"/>
    </p>    
    <input type="submit" value="Submit"/>
</form:form>  
</body>
</html>