<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Create New Project</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body class="bg-light">

    <div class="container mt-5">
        <div class="card shadow p-4">
            <h2 class="mb-4 text-center">Create New Project</h2>
            
            <form:form action="/project/new" method="post" modelAttribute="newProject">
                <div class="mb-3">
                    <form:label path="name" cssClass="form-label">Project Name:</form:label>
                    <form:input path="name" cssClass="form-control" />
                    <form:errors path="name" cssClass="text-danger" />
                </div>
                
                <div class="mb-3">
                    <form:label path="description" cssClass="form-label">Description:</form:label>
                    <form:input path="description" cssClass="form-control" />
                    <form:errors path="description" cssClass="text-danger" />
                </div>
                
                <div class="mb-3">
                    <form:label path="startdate" cssClass="form-label">Start Date:</form:label>
                    <form:input path="startdate" type="date" cssClass="form-control" />
                    <form:errors path="startdate" cssClass="text-danger" />
                </div>
                
                <div class="mb-3">
                    <form:label path="enddate" cssClass="form-label">End Date:</form:label>
                    <form:input path="enddate" type="date" cssClass="form-control" />
                    <form:errors path="enddate" cssClass="text-danger" />
                </div>

                <div class="text-end">
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </form:form>
        </div>
    </div>

</body>
</html>
