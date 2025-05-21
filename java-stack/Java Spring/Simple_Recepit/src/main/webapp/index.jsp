<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.Date" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Simple Receipt</title>
</head>
<body>
	<h1>Customer Name: <c:out value="${name}"></c:out> </h1>
	<h2>Item name: <c:out value="${iten}"></c:out></h2>
	<h2>price: <c:out value="${price}$"></c:out> </h2>
	<h2>description: <c:out value="${desc}"></c:out> </h2>
	<h2>vendor: <c:out value="${vendor}"></c:out> </h2>
</body>
</html>