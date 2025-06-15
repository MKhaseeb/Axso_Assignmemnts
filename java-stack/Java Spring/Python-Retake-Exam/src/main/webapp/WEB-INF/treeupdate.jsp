<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Update Tree</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container mt-5">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
            <h3 class="mb-0">Edit Tree</h3>
        </div>
        <div class="card-body">
            <form:form action="/trees/${tree.id}/update" method="post" modelAttribute="updatetree" class="needs-validation">

                <div class="mb-3">
                    <form:label path="species" cssClass="form-label">Species: </form:label>
                    <form:input path="species" cssClass="form-control"/>
                    <form:errors path="species" cssClass="text-danger"/>
                </div>

                <div class="mb-3">
                    <form:label path="location" cssClass="form-label">Location: </form:label>
                    <form:input path="location" cssClass="form-control"/>
                    <form:errors path="location" cssClass="text-danger"/>
                </div>
                
                 <div class="mb-3">
                    <form:label path="date" cssClass="form-label">Date Found: </form:label>
                    <form:input type="Date" path="date" cssClass="form-control"/>
                    <form:errors path="date" cssClass="text-danger"/>
                </div>
                
                 <div class="mb-3">
                    <form:label path="zipCode" cssClass="form-label">Zip code: </form:label>
                    <form:input type="number" path="zipCode" cssClass="form-control"/>
                    <form:errors path="zipCode" cssClass="text-danger"/>
                </div>
                
                <div class="mb-3">
                    <form:label path="note" cssClass="form-label">Notes: </form:label>
                    <form:input path="note" cssClass="form-control"/>
                    <form:errors path="note" cssClass="text-danger"/>
                </div>

                <div class="d-flex justify-content-between">
                    <button type="submit" class="btn btn-success">Update</button>
                    <a href="/home" class="btn btn-secondary">Cancel</a>
                </div>

            </form:form>
        </div>
    </div>
</div>

</body>
</html>