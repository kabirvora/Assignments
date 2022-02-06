var questions = [
  {
    question: "Capital of INDIA",
    options: ["Mumbai", "Delhi", "Ahmedabad", "Kolkata"],
    correctAnswer: 1
  },
  {
    question: "Capital of Gujarat",
    options: ["Baroda", "Ahmedabad", "Gandhinagar", "Surat"],
    correctAnswer: 2
  },
  {
    question: "Capital of Maharashtra",
    options: ["Pune", "Thane", "Mumbai", "Nagpur"],
    correctAnswer: 2
  },
  {
    question: "Capital of Rajasthan",
    options: ["Ajmer", "Udaipur", "Jaipur", "Jaisalmer"],
    correctAnswer: 2
  },
  {
    question: "Capital of Goa",
    options: ["Panjim", "Varna", "Madgao", "Ponda"],
    correctAnswer: 0
  }
];
  
  var currentQuestion = 0;
  var correctAnswers = 0;
  var quizOver = false;
 
  

  $(document).ready(function() {
    $(document).find(".container").hide();
    $(document).find("#start").on("click", function() {
      $(".first-page").hide();
      $(document).find(".container").show();
    })

  
    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
  
    // On clicking next, display the next question
    $(this).find(".next").on("click", function() {
      if (!quizOver) {
  
        value = $("input[type='radio']:checked").val();
  
        if (value == undefined) {
          $(document).find(".quizMessage").text("Choose Any One");
          $(document).find(".quizMessage").show();
        } else {
          // TODO: Remove any message -> not sure if this is efficient to call this each time....
          $(document).find(".quizMessage").hide();
  
          if (value == questions[currentQuestion].correctAnswer) {
            correctAnswers++;
          }
  
          currentQuestion++; //it will increment the pointer to next 
          if (currentQuestion < questions.length) {
            displayCurrentQuestion();
          } else {
            displayScore();
            $(document).find(".next").text("Start-Again");
            quizOver = true;
          }
        }
      } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
        quizOver = false;
        $(document).find(".next").text("Next Question");
        resetQuiz();
        displayCurrentQuestion();
        hideScore();
      }
    });
  
  });
  
  // This displays the current question AND the options
  function displayCurrentQuestion() {
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".container > .question");
    var choiceList = $(document).find(".container > .choiceList");
    var numoptions = questions[currentQuestion].options.length;
  
    // Set the questionClass text to the current question
    $(questionClass).text(question);
  
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
  
    var choice;
    for (i = 0; i < numoptions; i++) {
      choice = questions[currentQuestion].options[i];
      $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
  }
  
  function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
  }
  
  function displayScore() {
    $(document).find(".container > .result").text("Scored: " + correctAnswers + "/" + questions.length);
    $(document).find(".container > .result").show();
  }
  
  function hideScore() {
    $(document).find(".result").hide();
  }
  