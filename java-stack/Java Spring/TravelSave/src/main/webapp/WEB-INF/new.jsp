<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>    

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Save Travels</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
</head>
<body>
<div class="container mt-5">
    <h1 class="display-4 text-center mb-4">Save Travels</h1>

    <div class="card shadow mb-5">
        <div class="card-body">
            <table class="table table-striped table-bordered">
                <thead class="table-dark">
                <tr>
                    <th>Expense</th>
                    <th>Vendor</th>
                    <th>Amount</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach var="travel" items="${travels}">
                    <tr>
   						<td> <a href="/travel/${travel.id}"><c:out value="${travel.expense}" /></a></td>
                        <td><c:out value="${travel.vendor}" /></td>
                        <td><c:out value="${travel.amount}" /></td>
                        <td> <a href="/travel/new/${travel.id}/edit" class="btn btn-warning btn-sm">Edit</a> 
                         <a href="/travel/new/${travel.id}/delete" class="btn btn-warning btn-sm">Delete</a> </td>                         
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>
    </div>

    <div class="card shadow">
        <div class="card-header bg-success text-white">
            <h4 class="mb-0">Add a expense: </h4>
        </div>
        <div class="card-body">
            <form:form action="/travel/new" method="post" modelAttribute="travel">
                <div class="mb-3">
                    <form:label path="expense" cssClass="form-label">Expense Name: </form:label>
                    <form:input path="expense" cssClass="form-control" />
                    <form:errors path="expense" cssClass="text-danger" />
                </div>

                <div class="mb-3">
                    <form:label path="vendor" cssClass="form-label">Vendor</form:label>
                    <form:textarea path="vendor" cssClass="form-control" />
                    <form:errors path="vendor" cssClass="text-danger" />
                </div>

                <div class="mb-3">
                    <form:label path="amount" cssClass="form-label">Amount: </form:label>
                    <form:input path="amount" type="number" min="0" max="5" cssClass="form-control" />
                    <form:errors path="amount" cssClass="text-danger" />
                </div>

                <div class="mb-3">
                    <form:label path="description" cssClass="form-label">Description: </form:label>
                    <form:input path="description" cssClass="form-control" />
                    <form:errors path="description" cssClass="text-danger" />
                </div>

                <div class="d-grid">
                    <input type="submit" value="Submit" class="btn btn-primary" />
                </div>
            </form:form>
        </div>
    </div>
    <form action="/travel/new/${travel.id}/delete" method="post">
    <input type="hidden" name="_method" value="delete">
</form>
</div>

<script src="/webjars/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>
