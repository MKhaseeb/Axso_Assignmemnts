<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <title>Trees in Zip Code ${zipCode}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container mt-5">
    <h2 class="mb-4">Trees in Zip Code: <span class="text-primary">${zipCode}</span></h2>

        <div class="list-group">
            <c:forEach var="tree" items="${trees}">
                <div class="list-group-item">
                    <h5 class="mb-1">Species: ${tree.species}</h5>
                    <p class="mb-1"><strong>Location:</strong> ${tree.location}</p>
                    <p class="mb-1"><strong>Date:</strong> ${tree.date}</p>
                    <p class="mb-1"><strong>Note:</strong> ${tree.note}</p>
                    <a href="/trees/${tree.id}" class="btn btn-sm btn-outline-primary">View Tree</a>
                </div>
            </c:forEach>
        </div>

    <a href="/home" class="btn btn-secondary mt-3">← Back to Home</a>
</div>

</body>
</html>
