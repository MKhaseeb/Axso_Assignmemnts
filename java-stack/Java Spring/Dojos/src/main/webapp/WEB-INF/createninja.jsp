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
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
</head>
<body>
<div class="card-body">
				<form:form action="/dojos/ninjas/new" method="post"
					modelAttribute="ninja">
					<div class="mb-3">
						<form:label path="fisrtname" cssClass="form-label">Firstname: </form:label>
						<form:input path="fisrtname" cssClass="form-control" />
						<form:errors path="fisrtname" cssClass="text-danger" />
					</div>
					<div class="mb-3">
						<form:label path="lastname" cssClass="form-label">Lastname: </form:label>
						<form:input path="lastname" cssClass="form-control" />
						<form:errors path="lastname" cssClass="text-danger" />
					</div>
					<div class="mb-3">
		        		<form:label path="age">Age: </form:label>
        				<form:errors path="age"/>
        				<form:input type="number" path="age"/>
					</div>
					<div class="mb-3">
					<form:label path="dojo">Select Dojo:</form:label>
					<form:select path="dojo" cssClass="form-control">
   						<form:options items="${dojos}" itemValue="id" itemLabel="name"/>
					</form:select>
					<form:errors path="dojo" cssClass="text-danger" />
   					 </div>
					<div class="d-grid">
						<input type="submit" value="Submit" class="btn btn-primary" />
					</div>
				</form:form>
			</div>

</body>
</html>