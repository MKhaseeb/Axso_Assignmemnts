<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

    <div class="container mt-5">

        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2>Welcome ${user.firstname} to Developers Dashboard</h2>
            <div>
                <a href="/logout" class="btn btn-outline-danger">Logout</a>
            </div>
        </div>

        <div class="mb-3">
            <a href="/project" class="btn btn-primary">Create Project +</a>
        </div>

        <div class="table-responsive">
            <table class="table table-striped table-bordered align-middle shadow-sm">
                <thead class="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Project name</th>
                        <th>Project owner</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach var="project" items="${projects}">
                        <tr>
                            <td>${project.id}</td>
                            <td>
                                <a href="/project/${project.id}" class="text-decoration-none">${project.name}</a>
                            </td>
                            <td>${project.user.firstname} ${project.user.lastname}</td>
                            <td class="text-center">
                                <c:if test="${project.user.id == user.id}">
                                    <form action="/project/${project.id}/delete" method="post" class="d-inline">
                                        <input type="hidden" name="_method" value="delete">
                                        <input type="submit" class="btn btn-sm btn-danger" value="Delete">
                                    </form>
                                </c:if>
                                <c:choose>
    <c:when test="${joinedProjectIds.contains(project.id)}">
        <a href="/project/${project.id}/separate" class="btn btn-secondary">Separate</a>
    </c:when>
    <c:otherwise>
        <a href="/project/${project.id}/join" class="btn btn-success">Join</a>
    </c:otherwise>
</c:choose>
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
    </div>

</body>
</html>
