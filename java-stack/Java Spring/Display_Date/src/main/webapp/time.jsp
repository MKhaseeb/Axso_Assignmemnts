<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.Date" %>
<%@ page import = "java.text.SimpleDateFormat" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>time</title>
    <link rel="stylesheet" type="text/css" href="/css/time.css">
    <script type="text/javascript" src="/js/script.js"></script>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
        <%
	SimpleDateFormat sdf = new SimpleDateFormat("h:mm a");
	String date = sdf.format(new Date());
	%>
</head>
<body>
<div class="con">
<h1><%=date%></h1>
</div>

</body>
</html>