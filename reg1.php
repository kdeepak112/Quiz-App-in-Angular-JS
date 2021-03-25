<?php
require_once "config.php";

$email = $password = $confirm_password = "";
$email_err = $password_err = $confirm_password_err = "";

if ($_SERVER['REQUEST_METHOD'] == "POST"){
    
        $email = $_POST['email'];
    
        $password = $_POST['password'];
    
    
    $sql = "select * from register where email = '$email'";
    
    $result = mysqli_query($conn,$sql);
    
    $num = mysqli_num_rows($result);
    
    if($num == 1){
        echo "User Already Regsitered";
    }else{
        $reg = "insert into register(email,password) values ('$email','$password')";
        if(mysqli_query($conn,$reg)){
            header("location:login.php");
        }
        echo "alert('User registered successfully')";
    }

    // Check if email is empty
    /*if(empty(trim($_POST["email"]))){
        $email_err = "email cannot be blank";
    }
    else{
        $sql = "SELECT id FROM users WHERE email = ?";
        $stmt = mysqli_prepare($conn, $sql);
        if($stmt)
        {
            mysqli_stmt_bind_param($stmt, "s", $param_email);

            // Set the value of param email
            $param_email = trim($_POST['email']);

            // Try to execute this statement
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);
                if(mysqli_stmt_num_rows($stmt) == 1)
                {
                    $email_err = "This email is already taken"; 
                }
                else{
                    $email = trim($_POST['email']);
                }
            }
            else{
                echo "Something went wrong";
            }
        }
    }

    mysqli_stmt_close($stmt);


// Check for password
if(empty(trim($_POST['password']))){
    $password_err = "Password cannot be blank";
}
elseif(strlen(trim($_POST['password'])) < 5){
    $password_err = "Password cannot be less than 5 characters";
}
else{
    $password = trim($_POST['password']);
}

// Check for confirm password field
if(trim($_POST['password']) !=  trim($_POST['confirm_password'])){
    $password_err = "Passwords should match";
}


// If there were no errors, go ahead and insert into the database
if(empty($email_err) && empty($password_err) && empty($confirm_password_err))
{
    $sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    $stmt = mysqli_prepare($conn, $sql);
    if ($stmt)
    {
        mysqli_stmt_bind_param($stmt, "ss", $param_email, $param_password);

        // Set these parameters
        $param_email = $email;
        $param_password = password_hash($password, PASSWORD_DEFAULT);

        // Try to execute the query
        if (mysqli_stmt_execute($stmt))
        {
            header("location: login.php");
        }
        else{
            echo "Something went wrong... cannot redirect!";
        }
    }
    mysqli_stmt_close($stmt);
}
mysqli_close($conn);*/
}

?>

<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <style type="text/css">
    *{
        margin:0;
        padding: 0;
    }
    body{
        background-image: url(Images/exam.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        font-family: sans-serif;
        margin-top: 40px;
    }
    .regform{
        width: 800px;
        min-width: 300px;
        background-color: rgb(0,0,0,6);
        margin: auto;
        color: #ffffff;
        padding: 10px 0px 10px;
        text-align: center;
        border-radius: 15px 15px 0px 0px;

    }
    .main{
        background-color: rgb(0,0,0,0.5);
        width: 800px;
        margin: 0 auto;
    }
    form{
        padding: 10px;
    }
    #name{
        width: 100%;
        height: 100px;
    }
    .name{
        margin-left: 15px;
        margin-top: 30px;
        width: 125px;
        color: white;
        font-size: 18px;
        font-weight: 700 ;
    }
    .fname{
        position: relative;
        left: 200px;
        top: -37px;
        line-height: 40px;
        border-radius: 6px;
        padding: 0 22px;
        font-size: 16px;
    }
    .eml{
        position: relative;
        left: 200px;
        top: -37px;
        line-height: 40px;
        border-radius: 6px;
        padding: 0 22px;
        font-size: 16px;
    }
    .psw{
        position: relative;
        left: 200px;
        top: -37px;
        line-height: 40px;
        border-radius: 6px;
        padding: 0 22px;
        font-size: 16px;
    }
    .cpsw{
        position: relative;
        left: 200px;
        top: -37px;
        line-height: 40px;
        border-radius: 6px;
        padding: 0 22px;
        font-size: 16px;
    }
    .sub-div{
        display: grid;
        place-items: center;
    }
    .button{
        background-color: #3BAF9F;
        display: block;
        margin: 20px 0px 0px 20px;
        text-align: center;
        border-radius: 12px;
        border: 2px solid #366473;
        padding: 14px 110px;
        outline: none;
        color: white;
        cursor: pointer;
        transition: 0.25px;
    }
    button:hover{
        background-color: #5390F5;
    }

   
    @media screen and (max-width:1200px) {
.regform{
    width:600px;
}
.main{
    width: 600px;
}
.sub-div{
    margin: 0 30% 0 0;
}

        
    }
        </style>
    </head>
    <script src="angular.min.js"></script>
    <body ng-app="myApp" ng-controller="studentController">
        <div class="regform">
            <h3>Sign Up</h3>
        </div>
        <div class="main">
            <div class="sub-div">
                <form name="form1" class="signup" action="" method="post">
                    <p class="name">
                        Name:
                        <br>
                        <input
                            class="fname"
                            type="text"
                            name="username"
                            ng-model="username"
                            required
                        >
                        <span style="color: red;" ng-show="form1.email.$pristine && form1.email.$invalid">
                            Name is required.
                        </span>
                    </p>
                    <p class="name">
                        Email:
                        <br>
                        <input
                            class="eml"
                            type="email"
                            name="email"
                            ng-model="email"
                            required
                        >
                        <span ng-show="form1.email.$invalid && form1.email.$dirty">
                            <span ng-show="form1.email.$error.required">Email required,</span>
                            <span style="color: red;" ng-show="form1.email.$error.email">Enter valid Email.</span>
                        </span>
                    </p>
                    <p class="name">
                        Password
                        <br>
                        <input
                            class="psw"
                            type="password"
                            name="password"
                            ng-model="password"
                            ng-minlength="6"
                        >
                        <h6 ng-if="!form1.password.$valid">Value too short</h6>
                    </p>
                    <p class="name">
                        Confirm Password
                        <br>
                        <input
                            class="cpsw"
                            type="password"
                            name="confirm_password"
                            ng-model="cpassword"
                            required
                            ng-change="match()"
                        >
                        <span ng-show="isMatch" style="color:green">Password matched</span>
                        <span ng-hide="isMatch || cpassword==null" style="color:red">
                            Password does not match
                        </span>
                    </p>
                    <input class="button" type="submit">
                </form>
            </div>
        </div>
        <script>
        var mainApp = angular.module("myApp", []);
        mainApp.controller("studentController", function ($scope) {

            $scope.match = function () {
                $scope.isMatch = angular.equals($scope.password, $scope.cpassword);
            }

        });
        </script>
    </body>
</html>
