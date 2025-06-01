<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Burger Tracker</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
</head>
<body>
<div class="container mt-5">
    <h1 class="display-4 text-center mb-4">Burger Tracker</h1>

    <div class="card shadow mb-5">
        <div class="card-body">
            <table class="table table-striped table-bordered">
                <thead class="table-dark">
                <tr>
                    <th>Burger Name</th>
                    <th>Restaurant Name</th>
                    <th>Rating</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach var="burger" items="${burgers}">
                    <tr>
                        <td><c:out value="${burger.name}" /></td>
                        <td><c:out value="${burger.restaurant}" /></td>
                        <td><c:out value="${burger.rating}" /></td>
                        <td> <a href="/burgers/new/${burger.id}/edit" class="btn btn-warning btn-sm">Edit</a> </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>
    </div>

    <div class="card shadow">
        <div class="card-header bg-success text-white">
            <h4 class="mb-0">Add New Burger</h4>
        </div>
        <div class="card-body">
            <form:form action="/burgers/new" method="post" modelAttribute="burger">
                <div class="mb-3">
                    <form:label path="name" cssClass="form-label">Burger Name</form:label>
                    <form:input path="name" cssClass="form-control" />
                    <form:errors path="name" cssClass="text-danger" />
                </div>

                <div class="mb-3">
                    <form:label path="restaurant" cssClass="form-label">Restaurant Name</form:label>
                    <form:textarea path="restaurant" cssClass="form-control" />
                    <form:errors path="restaurant" cssClass="text-danger" />
                </div>

                <div class="mb-3">
                    <form:label path="rating" cssClass="form-label">Rating</form:label>
                    <form:input path="rating" type="number" min="0" max="5" cssClass="form-control" />
                    <form:errors path="rating" cssClass="text-danger" />
                </div>

                <div class="mb-3">
                    <form:label path="note" cssClass="form-label">Note</form:label>
                    <form:input path="note" cssClass="form-control" />
                    <form:errors path="note" cssClass="text-danger" />
                </div>

                <div class="d-grid">
                    <input type="submit" value="Submit" class="btn btn-primary" />
                </div>
            </form:form>
        </div>
    </div>
</div>

<script src="/webjars/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>
