<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Tree Details</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

</head>
<body class="bg-light">

    <div class="container mt-5">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white">
              
                <h2 class="mb-0">Tree mapper</h2>
                 <h5><span class="text-white">${trees.species}</span> by <span class="text-danger">${trees.user.firstname}${trees.user.lastname}</span></h5>
            </div>
            <div class="card-body">

                <p class="card-text">Where: ${trees.location}</p>
                <p class="card-text">When: ${trees.date}</p>
                <p class="card-text">Notes: ${trees.note}</p>

                    </div>
            </div>
            <a href="/home">Dashboard</a>
            <a href="/logout">Logout</a>
        </div>

</html>