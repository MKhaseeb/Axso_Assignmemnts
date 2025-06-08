<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>LogReg</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

</head>
<body>

 <h1>Register</h1>
 				<form:form action="/register" method="post"
					modelAttribute="newUser">
					<div class="mb-3">
						<form:label path="userName" cssClass="form-label">User Name: </form:label>
						<form:input path="userName" cssClass="form-control" />
						<form:errors path="userName" cssClass="text-danger" />
					</div>
					<div class="mb-3">
						<form:label path="email" cssClass="form-label">Email : </form:label>
						<form:input path="email" cssClass="form-control" />
						<form:errors path="email" cssClass="text-danger" />
					</div>
										<div class="mb-3">
						<form:label path="password" cssClass="form-label">Password: </form:label>
						<form:input type="password" path="password" cssClass="form-control" />
						<form:errors path="password" cssClass="text-danger" />
					</div>
										<div class="mb-3">
						<form:label path="confirm" cssClass="form-label">Confirm Password: </form:label>
						<form:input path="confirm" cssClass="form-control" />
						<form:errors path="confirm" cssClass="text-danger" />
					</div>
					<div class="d-grid">
						<input type="submit" value="Submittt" class="btn btn-primary" />
					</div>
				</form:form>
				
<h1>Login</h1>
 				<form:form action="/login" method="post"
					modelAttribute="newLogin">
					<div class="mb-3">
						<form:label path="email" cssClass="form-label">Email : </form:label>
						<form:input path="email" cssClass="form-control" />
						<form:errors path="email" cssClass="text-danger" />
					</div>
										<div class="mb-3">
						<form:label path="password" cssClass="form-label">Password: </form:label>
						<form:input path="password" cssClass="form-control" />
						<form:errors path="password" cssClass="text-danger" />
					</div>
										<div class="d-grid">
						<input type="submit" value="Submit" class="btn btn-primary" />
					</div>
				</form:form>

</body>
</html>