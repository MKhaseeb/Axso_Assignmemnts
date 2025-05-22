<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Fruits Loops</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
    <h1>Fruit Store</h1>
<table border="1" cellpadding="10">
    <thead>
        <tr>
            <th>Fruit</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach var="fruit" items="${fruitss}">
            <tr>
                <td><c:out value="${fruit.name}" /></td>
                <td><c:out value="${fruit.price}" /></td>
            </tr>
        </c:forEach>
    </tbody>
</table>
</body>
</html>