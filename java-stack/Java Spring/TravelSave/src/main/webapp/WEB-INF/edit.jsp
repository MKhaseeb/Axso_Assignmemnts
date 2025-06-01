<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isErrorPage="true" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Edit Expense</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

</head>
<body>
<div class="container mt-5">
    <div class="card shadow-lg rounded">
        <div class="card-header bg-primary text-white">
            <h3 class="mb-0">Edit Expense</h3>
        </div>
        <div class="card-body">
            <form:form action="/travel/new/${travel.id}" method="post" modelAttribute="travel">

                <div class="mb-3">
                    <form:label path="expense" cssClass="form-label">Expense Name: </form:label>
                    <form:input path="expense" cssClass="form-control"/>
                    <form:errors path="expense" cssClass="text-danger"/>
                </div>

                <div class="mb-3">
                    <form:label path="vendor" cssClass="form-label">Vendor: </form:label>
                    <form:textarea path="vendor" cssClass="form-control"/>
                    <form:errors path="vendor" cssClass="text-danger"/>
                </div>

                <div class="mb-3">
                    <form:label path="amount" cssClass="form-label">Amount: </form:label>
                    <form:input type="number" path="amount" min="0" max="5" cssClass="form-control"/>
                    <form:errors path="amount" cssClass="text-danger"/>
                </div>

                <div class="mb-3">
                    <form:label path="description" cssClass="form-label">Description: </form:label>
                    <form:input path="description" cssClass="form-control"/>
                    <form:errors path="description" cssClass="text-danger"/>
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
