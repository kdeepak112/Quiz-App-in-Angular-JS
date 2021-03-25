var app = angular.module("course", []);
app.controller("control", function ($scope) {
  $scope.active = {};

  $scope.activeQuestion = 0;

  $scope.error = false;

  $scope.finalise = false;

  $scope.score = 0;

  $scope.resultDiv = true;

  $scope.subject = "";

  $scope.courseObj = {};

  $scope.modal = function (data) {
    $scope.active = data;
  };

  $scope.subAssign = function (index) {
    $scope.subject = index.name;
    console.log($scope.subject);
    if ($scope.subject == "python") {
      $scope.courseObj = $scope.python;
      console.log($scope.courseObj);
    }
    if ($scope.subject == "HTML") {
      $scope.courseObj = $scope.html;
      console.log($scope.courseObj);
    }
    if ($scope.subject == "Current Affairs") {
      $scope.courseObj = $scope.gk;
      console.log($scope.courseObj);
    }
    if ($scope.subject == "php") {
      $scope.courseObj = $scope.php;
      console.log($scope.courseObj);
    }
    if ($scope.subject == "C") {
      $scope.courseObj = $scope.c;
      console.log($scope.courseObj);
    }
    return $scope.courseObj;
  };

  $scope.demo = function (index) {
    $scope.courseObj = $scope.subAssign(index);
  };

  $scope.courses = [
    {
      image: "Images/python.jpg",
      name: "python",
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
      year: "1999",
      description:
        "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
      companies: "No Choice You have to Use it.",

      Question: "10-20",
      Topics_Cover: "Syntax , MArkup Problems",
      Time: "30 min ",
    },
    {
      image: "Images/css.jpg",
      name: "php",
      year: "1994",
      description:
        "PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group",
      companies: "Stack , Facebook , WhatsApp",

      Question: "10-20",
      Topics_Cover: "Syntax , Logical Problems",
      Time: "30 min ",
    },
    {
      image: "Images/AI.jpg",
      name: "C",
      year: "1972",
      description:
        "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions",
      companies: "Google , Facebook , Instagram",

      Question: "10-20",
      Topics_Cover: "Syntax , Logical Problems",
      Time: "30 min ",
    },
    {
      image: "Images/Gk.jpg",
      name: "Current Affairs",
      year: "Gets Updating",
      description:
        "Know whats Happening  around you.",
      companies: "World Uses it.",

      Question: "10-20",
      Topics_Cover: "Syntax , Logical Problems",
      Time: "30 min ",
    },
  ];

  $scope.setAns = function (index) {
    $scope.python[$scope.activeQuestion].selected = index;
  };

  $scope.numQuestionAns = 0;

  $scope.setActiveQuestion = function (index) {
    if (index === undefined) {
      var breakout = false;
      var quizLen = $scope.python.length - 1;

      while (!breakout) {
        $scope.activeQuestion =
          $scope.activeQuestion < quizLen ? ++$scope.activeQuestion : 0;

        if ($scope.activeQuestion === 0) {
          $scope.error = true;
        }

        if ($scope.python[$scope.activeQuestion].selected === null) {
          breakout = true;
        }
      }
    } else {
      $scope.activeQuestion = index;
    }
  };

  $scope.result_show = false;

  $scope.finalizeAns = function () {
    $scope.finalise = false;
    $scope.numQuestionAns = 0;

    for (var i = 0; i < $scope.python.length; i++) {
      if (
        $scope.python[i].correct ==
        $scope.python[i].possibility[$scope.python[i].selected].ans.valueOf()
      ) {
        $scope.score++;
      }
    }
    console.log("Score" + $scope.score);
    $scope.resultDiv = false;
    $scope.result_show = true;
    $scope.score = ($scope.score / 10) * 100;
  };

  $scope.questionAnswered = function () {
    console.log("subject" + $scope.subject);
    var quizLen = $scope.python.length;
    if ($scope.python[$scope.activeQuestion].selected !== null) {
      $scope.numQuestionAns++;
      console.log($scope.numQuestionAns);
      if ($scope.numQuestionAns >= quizLen) {
        for (var i = 0; i < quizLen; i++) {
          if ($scope.python[i].selected === null) {
            $scope.setActiveQuestion(i);
            return;
          }
        }
        $scope.error = false;
        console.log("Making finalize true");
        $scope.finalise = true;
        return;
        console.log($scope.finalise);
      }
    }
    $scope.setActiveQuestion();
  };

  $scope.resultActive = 0;
  $scope.resultAnswered = function () {
    if ($scope.resultActive < $scope.python.length - 1) {
      $scope.resultActive++;
    } else {
      $scope.resultActive = 0;
    }
  };

  $scope.result = function (index) {
    console.log(index);
    $scope.resultActive = index;
    console.log($scope.resultActive);
  };

  $scope.python = [
    {
      question: "Python was developed by",
      possibility: [
        {
          ans: "Guido van Rossum",
        },
        { ans: "James Gosling" },
        { ans: "Dennis Ritchie" },
        { ans: "Bjarne Stroustrup" },
      ],
      correct: "Guido van Rossum",
      selected: null,
    },
    {
      question: "Python was developed in which year?",
      possibility: [
        { ans: "1972" },
        { ans: "1995" },
        { ans: "1989" },
        { ans: "1981" },
      ],
      correct: "1989",
      selected: null,
    },
    {
      question: "Python is written in which language?",
      possibility: [
        { ans: "C" },
        { ans: "C++" },
        { ans: "java" },
        { ans: "none of the above" },
      ],
      correct: "C",
      selected: null,
    },
    {
      question: "What is the extension ofpython file?",
      possibility: [
        { ans: ".p" },
        { ans: ".py" },
        { ans: ".python" },
        { ans: "none of the above" },
      ],
      correct: ".py",
      selected: null,
    },
    {
      question: "Python is Object Oriented Programming Language.",
      possibility: [
        {
          ans: "true",
        },
        { ans: "false" },
        { ans: "Neither true nor false" },
        { ans: "None of the above" },
      ],
      correct: "true",
      selected: null,
    },
    {
      question: "What is a python file with .py extension called?",
      possibility: [
        {
          ans: "package",
        },
        { ans: "module" },
        { ans: "directory" },
        { ans: "none of the above" },
      ],
      correct: "module",
      selected: null,
    },
    {
      question: "Python 3.0 is released in which year?",
      possibility: [
        { ans: "2000" },
        { ans: "2008" },
        { ans: "2011" },
        { ans: "2016" },
      ],
      correct: "2008",
      selected: null,
    },

    {
      question: "Which of the following statements is true?",
      possibility: [
        {
          ans: "Python is a high level programming language.",
        },
        { ans: "Python is an interpreted language" },
        { ans: " Python is an interpreted language." },
        { ans: "All of the above" },
      ],
      correct: "All of the above",
      selected: null,
    },

    {
      question: "What is used to define a block of code in Python?",
      possibility: [
        {
          ans: "Parenthesis",
        },
        { ans: "Indentation" },
        { ans: "Curly braces" },
        { ans: "None of the above" },
      ],
      correct: "Indentation",
      selected: null,
    },

    {
      question:
        "By the use of which character, single line is made comment in Python?",
      ans: "*",
      possibility: [{ ans: "@" }, { ans: "#" }, { ans: "!" }, { ans: "_" }],
      correct: "!",
      selected: null,
    },
  ];
  
});













$scope.html = [
  {
    question: "HTML stands for",
    possibility: [
      {
        ans: "Hyper Text Markup Language",
        ans: "HyperText Machine Language",
        ans: "Hyper Technical Machine Language",
        ans: "none of these",
      },
    ],
    correct: "a",
    selected: null,
  },

  {
    question: "In which year HTML was invented?",
    possibility: [{ ans: "1990", ans: "1991", ans: "1992", ans: "1993" }],
    correct: "b",
    selected: null,
  },

  {
    question: "Which of the following is not correct with reference to HTML?",
    possibility: [
      {
        ans: "DOCTYPE refers to document type.",
        ans: "DOCTYPE is not case sensitive",
        ans: "DOCTYPE is used only once at the start of the document.",
        ans: "none of these",
      },
    ],
    correct: "d",
    selected: null,
  },

  {
    question: "HTML tags are represented within",
    possibility: [{ ans: "<>", ans: "()", ans: "[]", ans: "{}" }],
    correct: "a",
    selected: null,
  },

  {
    question: "Drag and drop feature is supported in",
    possibility: [
      {
        ans: "HTML5",
        ans: "HTML4",
        ans: "Both HTML4 and HTML5",
        ans: "It is not supported at all.",
      },
    ],
    correct: "a",
    selected: null,
  },

  {
    question:
      "What if one does not use the doctype in the starting of HTML document?",
    possibility: [
      {
        ans: "Browser finds the document in quirky mode",
        ans: "Browser finds a document in standard mode",
        ans: "Browser stops working",
        ans: "Browser crashes after showing the page View Answer",
      },
    ],
    correct: "a",
    selected: null,
  },

  {
    question:
      "Which element is design to wrap a single piece of information?",
    possibility: [
      { ans: "<time>", ans: "<nav>", ans: "<footer>", ans: "<header>" },
    ],
    correct: "a",
    selected: null,
  },

  {
    question:
      "The __________ attribute sets the text direction as related to the lang Attribute.",
    possibility: [{ ans: "<lang", ans: "<sub>", ans: "<dir", ans: "<ds" }],
    correct: "c",
    selected: null,
  },

  {
    question: "To create HTML page, you need",
    possibility: [
      {
        ans: "Web browser",
        ans: "text editor",
        ans: "Both A and B",
        ans: "none of these",
      },
    ],
    correct: "c",
    selected: null,
  },

  {
    question: "Who is Known as the father of World Wide Web (WWW)?",
    possibility: [
      {
        ans: "Robert  Cailliau",
        ans: " Tim Thompson",
        ans: "Charles Darwin",
        ans: "Tim Berners-Lee",
      },
    ],
    correct: "d",
    selected: null,
  },
];
$scope.c = [
  {
    question: "Who is father of C Language?",
    possibility: [
      {
        ans: "Bjarne Stroustrup",
        ans: "James Gosling",
        ans: "Dennis Ritchie",
        ans: "Dr. E.F. Codd",
      },
    ],
    correct: "c",
    selected: null,
  },

  {
    question: "C Language was developed at ?",
    possibility: [
      {
        ans: "AT & T Bell Laboratory",
        ans: "MIT University",
        ans: "Harvard University",
        ans: "Stanford Lab",
      },
    ],
    correct: "a",
    selected: null,
  },

  {
    question: "3.Many features of C were derived from which language ?",
    possibility: [{ ans: "PASCAL", ans: "B", ans: "BASIC", ans: "FORTRAN" }],
    correct: "b",
    selected: null,
  },

  {
    question: "What is C language?",
    possibility: [
      {
        ans: "C language is a structure/procedure oriented",
        possibility: [
          {
            ans: "C language is a middle level programming language",
            ans:
              " C language was invented for implementing UNIX operating system",
            ans: "none of the above",
          },
        ],
        correct: "d",
        selected: null,
      },

      {
        question: "First version of C Programming language is ____ .",
        possibility: [{ ans: "K&R", ans: "C89", ans: "ANSI", ans: "R&K" }],
        correct: "a",
        selected: null,
      },

      {
        question: "C was initially used for",
        possibility: [
          {
            ans: "General purpose",
            ans: "System development work",
            ans: "Data processing",
            ans: "None of these",
          },
        ],
        correct: "b",
        selected: null,
      },

      {
        question: "C programming language is",
        possibility: [
          {
            ans: "Procedural languages",
            ans: "Object Oriented language",
            ans: "Scripting languages",
            ans: "None of these",
          },
        ],
        correct: "a",
        selected: null,
      },

      {
        question: "Which Committee standardize C Programming Language ?",
        possibility: [{ ans: "IEEE", ans: "ISO", ans: "IEC", ans: "ANSI" }],
        correct: "d",
        selected: null,
      },

      {
        question: "Which year C language is developed?",
        ans: "1970",
        ans: "1971",
        ans: "1972",
        ans: "1973",
      },
    ],
    correct: "c",
    selected: null,
  },

  {
    question: ".Which of these is not an example for IDE in C?",
    possibility: [
      { ans: "Turbo", ans: "Pycharm", ans: "Code:Blocks", ans: "Borland" },
    ],
    correct: "b",
    selected: null,
  },
];

$scope.php = [
  {
    question: "The term PHP is an acronym for PHP:_______________",
    possibility: [
      {
        ans: "Hypertext Preprocessor",
        ans: "Hypertext multiprocessor",
        ans: "Hypertext markup Preprocessor",
        ans: "Hypertune Preprocessor",
      },
    ],
    correct: "a",
    selected: null,
  },
  {
    question: "PHP is a ____________ language",
    posssibility: [
      {
        ans: "user-side scripting",
        ans: "client-side scripting",
        ans: "server-side scripting",
        ans: "Both B and C",
      },
    ],
    correct: "c",
    selected: null,
  },
  {
    question: "Who among this is the founder of php language",
    posssibility: [
      {
        ans: "Tim Berners-Lee",
        ans: "Brendan Eich",
        ans: " Guido van Rossum",
        ans: "Rasmus Lerdorf",
      },
    ],
    correct: "d",
    selected: null,
  },
  {
    question: "In which year php was created",
    posssibility: [
      {
        ans: "1993",
        ans: "1994",
        ans: "1995",
        ans: "1996",
      },
    ],
    correct: "b",
    selected: null,
  },
  {
    question: "PHP files have a default file extension of_______.",
    posssibility: [
      {
        ans: "html",
        ans: "xml",
        ans: "php",
        ans: "hphp",
      },
    ],
    correct: "c",
    selected: null,
  },
  {
    question: "Which of the following is the correct syntax of php",
    posssibility: [
      {
        ans: "<?php >",
        ans: "<php >",
        ans: "?php ?",
        ans: "<?php ?>",
      },
    ],
    correct: "d",
    selected: null,
  },
  {
    question: "Which of the following is the latest version of php",
    posssibility: [
      {
        ans: "7.1",
        ans: "7.2",
        ans: "7.3",
        ans: "7.4",
      },
    ],
    correct: "d",
    selected: null,
  },
  {
    question:
      "Which of the following is the Release date of latest version (7.2) of php",
    posssibility: [
      {
        ans: "27 November 2017",
        ans: "28 November 2017",
        ans: "29 November 2017",
        ans: "30 November 2017",
      },
    ],
    correct: "b",
    selected: null,
  },
  {
    question: "Which of the below statements is equivalent to $sub -= $sub",
    posssibility: [
      {
        ans: "$sub = $sub",
        ans: "$sub = $sub -$sub",
        ans: "$sub = $sub - 1",
        ans: " $sub = $sub - $sub - 1",
      },
    ],
    correct: "c",
    selected: null,
  },
  {
    question: "Which statement will output $lfc on the screen",
    posssibility: [
      {
        ans: "echo '$lfc'",
        ans: "echo '$$lfc'",
        ans: "echo '/$lfc'",
        ans: "echo '$lfc;'",
      },
    ],
    correct: "a",
    selected: null,
  },
];
$scope.gk = [
  {
    question: " Which is the largest landlocked country of the world?",
    possibility: [
      {
        ans: "Mangolia",
        ans: "Uzbekistan",
        ans: "Kazakhstan",
        ans: "afghanistan",
      },
    ],
    correct: "c",
    selected: null,
  },
  {
    question: " Which is the second largest country in Africa? ",
    possibility: [
      {
        ans: " Sudan ",
        ans: " Algeria ",
        ans: " Democratic Republic of the Congo",
        ans: " South Africa ",
      },
    ],
    correct: "c",
    selected: null,
  },
  {
    question: "Which is the world’s third largest country? (Area wise)",
    possibility: [
      {
        ans: "canada",
        ans: "russia",
        ans: "india",
        ans: "china",
      },
    ],
    correct: "d",
    selected: null,
  },
  {
    question:
      " Which SAARC Country contains eight of world’s ten highest peak? ",
    possibility: [
      {
        ans: "india",
        ans: "bhutan",
        ans: "nepal",
        ans: "pakistan",
      },
    ],
    correct: "c",
    selected: null,
  },
  {
    question:
      "49th Parallel line is a famous boundary line which exists between: ",
    possibility: [
      {
        ans: " Pakistan and India ",
        ans: " South Korea and North Korea ",
        ans: " Canada and United States of America",
        ans: " None of the above",
      },
    ],
    correct: "c",
    selected: null,
  },
  {
    question: " The longest river of Asia is: ",
    possibility: [
      {
        ans: " The Indus",
        ans: " The Ganges ",
        ans: " The Yangtze or Chang Jiang",
        ans: " None of the above",
      },
    ],
    correct: "c",
    selected: null,
  },
  {
    question: " In the Composition of the earth, Aluminum is:",
    possibility: [
      {
        ans: "27.5%",
        ans: "20.3%",
        ans: "14.5%",
        ans: "8.1%",
      },
    ],
    correct: "d",
    selected: null,
  },
  {
    question: "The deepest part of the Ocean is: ",
    possibility: [
      {
        ans: "vostok",
        ans: " Puerto Rico Trench",
        ans: " Mariana Trench",
        ans: " Sundas Trench",
      },
    ],
    correct: "c",
    selected: null,
  },
  {
    question:
      " After Australia, which of the following is the smallest Continent?",
    possibility: [
      {
        ans: "antartica",
        ans: "south america",
        ans: "north america",
        ans: "europe",
      },
    ],
    correct: "d",
    selected: null,
  },
  {
    question: " The deepest place in the Indian Ocean is: ",
    possibility: [
      {
        ans: "Mariana Trench ",
        ans: "Puerto Rico Trench",
        ans: "Sunda Trench",
        ans: "Isle Trench.",
      },
    ],
    correct: "c",
    selected: null,
  },
];
