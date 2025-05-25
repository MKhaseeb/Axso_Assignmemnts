<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ninja Gold</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
    <div class="inp">
        <form action="/counter" method="post">
            <label for="goldcounter">Your Gold</label>
            <input type="text" name="GoldVal" id="GoldCounter" readonly placeholder="${totalGold}" />
        </form>
    </div>
    <div class="container">
        <div class="areas">
            <form action="counter" method="post">
                <input type="hidden" name="Farm">
                <h1>Farm</h1>
                <h2>(earns 10-20 gold)</h2>
                <button type="submit">Find Gold</button>
            </form>
        </div>
        <div class="areas">
            <form action="counter" method="post">
                <input type="hidden" name="Cave" value="Cave">
                <h1>Cave</h1>
                <h2>(earns 10-20 gold)</h2>
                <button type="submit">Find Gold</button>
            </form>
        </div>

        <div class="areas">
            <form action="counter" method="post">
                <input type="hidden" name="House">
                <h1>House</h1>
                <h2>(earns 10-20 gold)</h2>
                <button type="submit">Find Gold</button>
            </form>
        </div>

        <div class="areas">
            <form action="counter" method="post">
                <input type="hidden" name="Quest">
                <h1>Quest</h1>
                <h2>(earns/takes 0-50 gold)</h2>
                <button type="submit">Find Gold</button>
            </form>
        </div>
    </div>
	
</body>
</html>