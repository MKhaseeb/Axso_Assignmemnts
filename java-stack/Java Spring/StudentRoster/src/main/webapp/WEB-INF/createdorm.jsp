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
<div class="card-body">
				<form:form action="/dorm/new" method="post"
					modelAttribute="dorm">
					<div class="mb-3">
						<form:label path="name" cssClass="form-label">Name: </form:label>
						<form:input path="name" cssClass="form-control" />
						<form:errors path="name" cssClass="text-danger" />
					</div>
					<div class="d-grid">
						<input type="submit" value="Submit" class="btn btn-primary" />
					</div>
				</form:form>
			</div>

</body>
</html>