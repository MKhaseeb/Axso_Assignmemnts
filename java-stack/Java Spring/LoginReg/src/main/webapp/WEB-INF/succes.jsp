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
</head>
<body>
	 <h1>Welcome, ${user.userName}!</h1>
	 <h2>This is your Dashboard, There's nothing to see here yet</h2>
	<h3><a href="/logout" class="btn btn-danger">Logout</a></h3>
</body>
</html>