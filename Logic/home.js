var app = angular.module("courselist", []);
app.controller("courseControl", function ($scope) {
  $scope.active = {};
  $scope.modal = function (data) {
    $scope.active = data;
  };

  $scope.courses = [
    {
      image: "Images/python.jpg",
      name: "Python",
      year: "1991",
      description:
        "Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991, Pythons design philosophy emphasizes code readability with its notable use of significant whitespace",
      companies: "Google , Facebook , Instagram",

      Question: "10-20",
      Topics_Cover: "Syntax , Logical Problems",
      Time: "30 min ",
    },
    {
      image: "Images/java.jpg",
      name: "Java",
      year: "1991",
      description:
        "Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991, Pythons design philosophy emphasizes code readability with its notable use of significant whitespace",
      companies: "Google , Facebook , Instagram",
      Question: "10-20",
      Topics_Cover: "Syntax , Logical Problems",
      Time: "30 min ",
    },
    {
      image: "Images/html.jpg",
      name: "HTML",
      year: "1991",
      description:
        "Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991, Pythons design philosophy emphasizes code readability with its notable use of significant whitespace",
      companies: "Google , Facebook , Instagram",

      Question: "10-20",
      Topics_Cover: "Syntax , Logical Problems",
      Time: "30 min ",
    },
    {
      image: "Images/css.jpg",
      name: "CSS",
      year: "1991",
      description:
        "Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991, Pythons design philosophy emphasizes code readability with its notable use of significant whitespace",
      companies: "Google , Facebook , Instagram",

      Question: "10-20",
      Topics_Cover: "Syntax , Logical Problems",
      Time: "30 min ",
    },
    {
      image: "Images/AI.jpg",
      name: "Artificial Intelligence",
      year: "1991",
      description:
        "Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991, Pythons design philosophy emphasizes code readability with its notable use of significant whitespace",
      companies: "Google , Facebook , Instagram",

      Question: "10-20",
      Topics_Cover: "Syntax , Logical Problems",
      Time: "30 min ",
    },
    {
      image: "Images/Gk.jpg",
      name: "Current Affairs",
      year: "1991",
      description:
        "Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991, Pythons design philosophy emphasizes code readability with its notable use of significant whitespace",
      companies: "Google , Facebook , Instagram",

      Question: "10-20",
      Topics_Cover: "Syntax , Logical Problems",
      Time: "30 min ",
    },
  ];
});
