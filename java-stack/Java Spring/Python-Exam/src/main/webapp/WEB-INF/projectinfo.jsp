<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${project.name} Details</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

    <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>Hello ${project.user.firstname} ${project.user.lastname}</h2>
            <div>
                <a href="/home" class="btn btn-outline-primary me-2">Dashboard</a>
                <a href="/logout" class="btn btn-outline-danger">Logout</a>
            </div>
        </div>

        <div class="card shadow">
            <div class="card-header bg-dark text-white">
                <h3 class="mb-0">${project.name}</h3>
                <small>by ${project.user.firstname} ${project.user.lastname}</small>
            </div>
            <div class="card-body">
                <h5 class="card-title text-muted">Project name:</h5>
                <p class="card-text">${project.name}</p>

                <h5 class="card-title text-muted">Project owner:</h5>
                <p class="card-text">${project.user.firstname} ${project.user.lastname}</p>

                <h5 class="card-title text-muted">Description:</h5>
                <p class="card-text">${project.description}</p>
                
                <c:if test="${project.user.id == user.id}">
					<a href="/project/${project.id}/edit">Edit</a>
                 </c:if>

                <!-- Optional: Team members section if needed later -->
                <!-- <div class="mt-4">
                    <h5>Dry Team</h5>
                    <ul>
                        <li>Member A</li>
                        <li>Member B</li>
                    </ul>
                </div> -->
            </div>
        </div>
    </div>

</body>
</html>
