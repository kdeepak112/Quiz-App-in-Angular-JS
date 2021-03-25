
<?php
session_start();

?>


<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
            integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
            crossorigin="anonymous"
        >
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
            integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
            crossorigin="anonymous"
        >
        <link href="https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="Style/style.css">
        <title>PreMock-Learn to Answer</title>
    </head>
    <body ng-app="course">
        <div class="top" style="background-image: url(Images/Home.jpg); background-size: cover;height: 42rem;">
            <nav class="check">
                <div class="title" data-aos="fade-left">
                    PreMock
                </div>
                <div class="nav-item" data-aos="fade-right">
                    <ul>
                        <li>
                            <a href="signup.html">Signup</a>
                        </li>
                        <li>
                            <a href="login.html">Login</a>
                        </li>
                        <li>
                            <a href="">Contact us</a>
                        </li>
                        <li>
                            <a><?php echo $_SESSION['email']; ?> </a>
                        </li>
                        <li>
                            <a href="logout.php">logout </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="container type-text" data-aos="fade-down-left"> 
                <p>
                    PreMock
                    <span class="typed-text" data-aos="slide-right"></span>
                    <span class="cursor">&nbsp;</span>
                </p>
            </div>
            <div class="intro text-center" data-aos="zoom-in-up">
                <p>
                    We Are The most Trusted Placement seletion Guide.
                    <br>
                    Over 10000 Students Study and Test Themselves Daily.
                    <br>
                    Join and lets start
                    <strong>PREPARING...</strong>
                    <br>
                    <p style="color: white;">
                        <br>
                        Scroll For More Info.
                        <br>
                        <i class="fa fa-angle-down" aria-hidden="true" data-aos="slide-down"></i>
                    </p>
                </p>
            </div>
        </div>
        <div
            class="container text-center "
            
            ng-controller="control"
            style="margin: 5% auto ;"
        >
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4" ng-repeat="x in courses" >
                    <div class="card mb-4 shadow-sm" data-aos="flip-up">
                        <img ng-src={{x.image}} alt="" style="width: 100%; height: 250px;">
                        <div class="card-body">
                            
                                <h1>{{x.name}}</h1>
                                
                                <p>Year : <span>{{x.year}}</span></p>
                                
                                <p>Description : {{x.description}}</p>
                                
                                <p>Company : {{x.companies}}</p>
                            
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="btn-group">
                                    <button type="button" data-toggle = "modal" data-target = "#course-info" class="btn btn-md btn-warning" ng-click="modal(x)">LearnMore</button>
                                    <a type="button"  class="btn btn-md btn-warning ml-3" href = "quiz.html" ng-click="subAssign(x)">TakeQuiz</a>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" id="course-info">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h2> Test Name : {{active.name}}</h2>
                            <br>
                            <p><h2>No. Of Questions </h2>: {{active.Question}}</p>
                            <br>
                            <p><h2>Topics Covered</h2> : {{active.Topics_Cover}}</p>
                            <br>
                            <p><span><h2>Time</h2> </span>: {{active.Time}}</p>
                        </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>



        
        <!-- Optional JavaScript -->
        <!-- Popper.js first, then Bootstrap JS -->
        <script src="Logic/animate.js"></script>
        <script src="Logic/quiz.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
        AOS.init({
            offset: 300,
            duration: 1000,
            once: false,
            
        });
        </script>
    </body>
</html>
