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
<a href="/">Dashboard</a>
 	
				<form:form action="/dorm/student/new" method="post"
					modelAttribute="student">
					<div class="mb-3">
						<form:label path="name" cssClass="form-label">Name: </form:label>
						<form:input path="name" cssClass="form-control" />
						<form:errors path="name" cssClass="text-danger" />
					</div>
					<div class="mb-3">
					<form:label path="dorm">Select Dorm:</form:label>
					<form:select path="dorm" cssClass="form-control">
   						<form:options items="${dorms}" itemValue="id" itemLabel="name"/>
					</form:select>
					<form:errors path="dorm" cssClass="text-danger" />
   					 </div>
					<div class="d-grid">
						<input type="submit" value="Submit" class="btn btn-primary" />
					</div>
				</form:form>
			


</body>
</html>