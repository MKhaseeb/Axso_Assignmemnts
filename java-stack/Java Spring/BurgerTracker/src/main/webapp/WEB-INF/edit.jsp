<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isErrorPage="true" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Edit Burger</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

</head>
<body>
<div class="container mt-5">
    <div class="card shadow-lg rounded">
        <div class="card-header bg-primary text-white">
            <h3 class="mb-0">Edit Burger</h3>
        </div>
        <div class="card-body">
            <form:form action="/burgers/new/${burger.id}" method="post" modelAttribute="burger">

                <div class="mb-3">
                    <form:label path="name" cssClass="form-label">Burger Name</form:label>
                    <form:input path="name" cssClass="form-control"/>
                    <form:errors path="name" cssClass="text-danger"/>
                </div>

                <div class="mb-3">
                    <form:label path="restaurant" cssClass="form-label">Restaurant Name</form:label>
                    <form:textarea path="restaurant" cssClass="form-control"/>
                    <form:errors path="restaurant" cssClass="text-danger"/>
                </div>

                <div class="mb-3">
                    <form:label path="rating" cssClass="form-label">Rating</form:label>
                    <form:input type="number" path="rating" min="0" max="5" cssClass="form-control"/>
                    <form:errors path="rating" cssClass="text-danger"/>
                </div>

                <div class="mb-3">
                    <form:label path="note" cssClass="form-label">Note</form:label>
                    <form:input path="note" cssClass="form-control"/>
                    <form:errors path="note" cssClass="text-danger"/>
                </div>

                <div class="d-grid">
                    <input type="submit" value="Submit" class="btn btn-success"/>
                </div>
            </form:form>
        </div>
    </div>
</div>

<script src="/webjars/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>
