<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Tree</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" 
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<body class="bg-light">

<div class="container mt-5">
    <div class="row">

        <div class="col-md-6">
            <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Add a Tree to the Map</h4>
                </div>
                <div class="card-body">
                    <form:form action="/trees/new" method="post" modelAttribute="newTree">

                        <div class="form-group">
                            <form:label path="species" cssClass="form-label">Species:</form:label>
                            <form:input path="species" cssClass="form-control"/>
                            <form:errors path="species" cssClass="text-danger"/>
                        </div>
                        
                        <div class="form-group">
                            <form:label path="location" cssClass="form-label">Location:</form:label>
                            <form:input path="location" cssClass="form-control"/>
                            <form:errors path="location" cssClass="text-danger"/>
                        </div>

                        <div class="form-group">
                            <form:label path="date" cssClass="form-label">Date Found:</form:label>
                            <form:input path="date"  type="date" cssClass="form-control"/>
                            <form:errors path="date" cssClass="text-danger"/>
                        </div>
                        
                        <div class="mb-3">
                    <form:label path="zipCode" cssClass="form-label">Zip code: </form:label>
                    <form:input type="number" path="zipCode" cssClass="form-control"/>
                    <form:errors path="zipCode" cssClass="text-danger"/>
                </div>

                        <div class="form-group">
                            <form:label path="note" cssClass="form-label">Notes:</form:label>
                            <form:input type="text" path="note" cssClass="form-control"/>
                            <form:errors path="note" cssClass="text-danger"/>
                        </div>

                        <div class="text-right">
                            <button type="submit" class="btn btn-success">Submit</button>
                        </div>
                    </form:form>
                </div>
            </div>
        </div>
        </div>
        </div>
</body>
</html>