<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
    <form action="/latter" method="post">
        <label for="dropdown">Pick any number From 5 to 25</label>
        <select name="dropdown" id="dropdown">
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
        </select>

		<br>
        <label for="city">Enter the name of any city:</label>
        <input type="text" name="city">

		<br>
        <label for="name">Enter the name of any real person:</label>
        <input type="text" name="name">
<br>
        <label for="hobby">Enter professional endaver or hobby:</label>
        <input type="text" name="hobby">
<br>
        <label for="thing">Enter any type of living thing:</label>
        <input type="text" name="thing">
<br>
        <label for="nice">Say something nice to someone:</label>
        <input type="text" name="nice">
<br>
        <button type="submit">Send</button>

    </form>
    <h1><c:out value="${name}"/></h1>
        <h1><c:out value="${dropdown}"/></h1>
            <h1><c:out value="${city}"/></h1>
                <h1><c:out value="${hobby}"/></h1>
                    <h1><c:out value="${thing}"/></h1>
                        <h1><c:out value="${nice}"/></h1>
	
</body>
</html>