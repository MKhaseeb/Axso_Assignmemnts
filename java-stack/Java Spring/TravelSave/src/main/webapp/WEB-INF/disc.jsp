<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>Travel Details</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
</head>
<body>
<div class="container mt-5">
    <h2>Travel Details</h2>
    <ul class="list-group">
        <li class="list-group-item"><strong>Expense:</strong> <c:out value="${travel.expense}" /></li>
        <li class="list-group-item"><strong>Vendor:</strong> <c:out value="${travel.vendor}" /></li>
        <li class="list-group-item"><strong>Amount:</strong> <c:out value="${travel.amount}" /></li>
        <li class="list-group-item"><strong>Description:</strong> <c:out value="${travel.description}" /></li>
    </ul>
    <a href="/travel" class="btn btn-primary mt-3">Back</a>
</div>
<script src="/webjars/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>
