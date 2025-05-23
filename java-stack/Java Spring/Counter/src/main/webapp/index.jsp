<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Counter</title>
</head>
<body>
	<h1>You have visited <a href="/">http://127.0.0.1:8080/</a>  <c:out value="${count}"/></h1>
	<h1><a href="/">Test another visit?</a></h1>
</body>
</html>