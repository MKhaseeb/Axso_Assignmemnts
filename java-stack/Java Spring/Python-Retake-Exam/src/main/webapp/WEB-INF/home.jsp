<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" 
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body class="bg-light">
	 
	 <div class="container mt-4">
    <h1 class="text-primary mb-4">Welcome, <span class="text-success">${user.firstname}</span>!</h1>
        <h1 class="text-primary mb-4">Tree mapping</h1>
 <p>Find,Share and learn about trees!</p>
    <div class="mb-3">
        <a href="/trees" class="btn btn-outline-primary">+ Post a new tree on the map</a>
    </div>

    <table class="table table-bordered table-hover table-striped">
        <thead class="table-dark">
            <tr>
                <th>Species</th>
                <th>view</th>
                <th>Mapped by</th>
                <th>Zip Code</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="tree" items="${trees}">
                <tr>
                    <td><c:out value="${tree.species}" /></td>
                    <td><a href="trees/${tree.id}" class="text-decoration-none text-primary">View</a></td>
                    <td><span class="text-success"><c:out value="${tree.user.firstname} ${tree.user.lastname}" /></span></td>
                    <td><a href="zip/${tree.zipCode}/trees" class="text-decoration-none text-primary">${tree.zipCode}</a></td>
                    <td>
                     <c:if test="${tree.user.id == user.id}">
                    <div class="d-flex gap-2">
                        <a href="/trees/${tree.id}/edit" class="btn btn-warning mr-2">Edit</a>

                        <form action="/trees/${tree.id}/delete" method="post" class="d-inline">
                            <input type="hidden" name="_method" value="delete">
                            <input type="submit" class="btn btn-danger" value="Delete">
                        </form>
                    </div>
                </c:if>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>

    <div class="mt-4">
        <a href="/logout" class="btn btn-danger">Logout</a>
    </div>
</body>
</html>