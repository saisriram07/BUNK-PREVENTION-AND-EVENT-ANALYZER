<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Official Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        header {
            background-color: #2c3e50;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        nav {
            background-color: #34495e;
            color: #fff;
            text-align: center;
            padding: 10px;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
        }
        .container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 20px;
        }
        .box {
            background-color: #ecf0f1;
            padding: 20px;
            margin: 20px;
            width: 200px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
            border-radius: 10px;
        }
        
        .box:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .register-button {
            background-color: #3498db;
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .register-button:hover {
            background-color: #2980b9;
        }
        footer {
            background-color: #2c3e50;
            color: #fff;
            text-align: center;
            padding: 20px;
            width: 100%;
            position: fixed;
            bottom: 0;
        }
        .student-info {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
            background-color: #ecf0f1;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 100%;
        }
        .student-info div {
            flex: 1;
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <h1>OD Attendance</h1>
    </header>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
    <div class="container">
        <div class="box">
            <h2>Event 1</h2>
            <p>Description of Event 1</p>
            <button class="register-button" onclick="register()">Register</button>
        </div>
        <div class="box">
            <h2>Event 2</h2>
            <p>Description of Event 2</p>
            <button class="register-button" onclick="register()">Register</button>
        </div>
        <div class="box">
            <h2>Event 3</h2>
            <p>Description of Event 3</p>
            <button class="register-button" onclick="register()">Register</button>
        </div>
        <div class="box">
            <h2>Event 4</h2>
            <p>Description of Event 4</p>
            <button class="register-button" onclick="register()">Register</button>
        </div>
        <div class="box">
            <h2>Event 5</h2>
            <p>Description of Event 5</p>
            <button class="register-button" onclick="register()">Register</button>
        </div>
    </div>
    <footer>
        <!-- No copyright information -->
    </footer>
    
    <script>
        function register() {
            // Redirect to another page
            window.location.href = "next_page.html";
        }
    </script>
</body>
</html>