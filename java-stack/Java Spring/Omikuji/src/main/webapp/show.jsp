<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omikuji latter</title>
</head>
<body>

	<h1>Here's Your Omikuji</h1>
	<h2>In <span><c:out value="${dropdown}"/></span>, you will live in <span><c:out value="${city}"/></span> with <c:out value="${name}"/> as your roommate, <c:out value="${hobby}"/>. The next time you see a <c:out value="${thing}"/>, you will have good luck. <c:out value="${nice}"/></h2>
	
	
	
</body>
</html>