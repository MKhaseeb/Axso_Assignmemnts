<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>${dorms.name}</h1>
	<a  href="/">Dashboard</a>
			<table border="1" cellpadding="10">
    <thead>
        <tr>
            <th>Student</th>
            <th>Action</th>
        </tr>
    </thead>
    				<form:form action="/dorm/student/neww" method="post"
					modelAttribute="studentt">
					<div class="mb-3">
					<form:label path="dorm">Select Name:</form:label>
					<form:select path="dorm" cssClass="form-control">
   						<form:options items="${students}" itemValue="id" itemLabel="name"/>
					</form:select>
					<form:errors path="dorm" cssClass="text-danger" />
   					 </div>
					<div class="d-grid">
						<input type="submit" value="Submit" class="btn btn-primary" />
					</div>
				</form:form>
    <tbody>
        <c:forEach var="std" items="${dorms.student}">
            <tr>
                <td><c:out value="${std.name}" /></td>
                <td><form action="/dorm/${std.id}/delete" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
</form></td>
            </tr>
        </c:forEach>
    </tbody>
</body>
</html>