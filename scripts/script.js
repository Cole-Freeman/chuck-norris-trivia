
// Ajax call to retrieve data from API
const spinApp = {};
spinApp.singleAjaxCall = function(categoryId){
   return $.ajax({
        url: "https://opentdb.com/api.php",
        type: 'GET',
        dataType: 'json',
        data: {
            amount: 1,
            category: categoryId,
            difficulty: "easy",
            type: "boolean",
        }
    }).then(function (result) {
       return result.results[0];
    })
}

// create array for categories received from API
spinApp.cat = [ 
    {category: "animals", id: 27},
    {category: "celebs", id: 22},
    {category: "geo", id: 21},
    {category: "music", id: 12},
    {category: "science", id: 17},
    {category: "sport", id: 26},
    {category: "tv", id: 14},
    {category: "film", id: 11},
    ];
// Randomize function
spinApp.randomCategory = function (array) {
    const randomNumber = Math.floor(Math.random() * this.cat.length);
    return array[randomNumber];
};

// create empty variable - to save ajax call output globally
let answerObjectSave = "";
// on spinner click function
spinApp.spinnerClick = function (){
    $("button").on("click", function () {
        // check how many turns are left, save to variable
        const turnsLeft = $(".turns").text();
        // inject empty html upon button click
        $(".quiz").html(``);
        // if user has more than 0 turns left
        if (turnsLeft > 0) {

            // save spinapp functions to variables
            const selectedCat = spinApp.randomCategory(spinApp.cat);
            const success = spinApp.singleAjaxCall(selectedCat.id);

            // toggle class to run spinner animation
            $("#spinner").addClass("rotation");
            setTimeout(function () {
                $("#spinner").removeClass('rotation');
            }, 1500);

            // ensure user cannot click on spinner once question is on page
            $('button').attr('disabled', 'disabled');
            
            // when api is successful inject category and question html to screen
            $.when(success).then((answerObject) => {
                
                $(".quiz").html(`<h2>${answerObject.category}</h2><p>${answerObject.question}</p>
                <form action="#">
                    <div class ="button-div">
                        <input type="radio" name="answers" id="true" value="True">
                        <label for="true">True</label>
                    
                        <input type="radio" name="answers" id="false" value="False">
                        <label for="false">False</label>
                    </div>
                
                    <input type="submit" class="submit" value="Submit!" id="submit-button">
                    <label for="submit-button" class="visually-hidden">Click to submit answer</label>
                </form>`);
        
                // user loses a turn after each question
                $('.turns').text(Number($(".turns").text()) - 1);

                // user global variable to populate quiz variable
                answerObjectSave = answerObject;
            })
        }
    
    });
}

// answer submit logic
spinApp.submitButton = function () {
    $("form").on("submit", function (event) {
        event.preventDefault();

        // store answer information to variables
        const userAnswer = $(`input[name=answers]:checked`).val();
        const ajaxAnswer = answerObjectSave.correct_answer;
        const incorrectAnswer = answerObjectSave.incorrect_answers;
        
        // logic for correct answers
        if (ajaxAnswer === userAnswer) {
            swal(`That's right!  You get 5 points, and an extra Spin - you Q-Wiz! Spin Again`);
            // add 5 points to user score
            $('.score').text(Number($(".score").text())+5);
            // add 1 turn to user turns
            $('.turns').text(Number($(".turns").text()) + 1);
            // disable ability to spin 
            $('input[type=radio]').attr('disabled', 'disabled');
            $('input[type=submit]').attr('disabled', 'disabled');
            $('button').removeAttr('disabled', 'disabled');

            // logic for incorrect answers
        } else if (incorrectAnswer == userAnswer) {
            swal(`Incorrect Answer, Spin Again`);
            // disable ability to spin
            $('input[type=radio]').attr('disabled', 'disabled');
            $('input[type=submit]').attr('disabled', 'disabled');
            $('button').removeAttr('disabled', 'disabled');
            
            // error handling, if user tries to submit without selecting an answers
        }  else {
            swal(`Select an answer!`);
            
            
        }


        // game over pop up logic
        const gameOver = $(".turns").text();

        if (gameOver == 0) {

            // play again button refreshes game on click
            swal({title: "Wrong!", text: "Play Again?", type: "success"}).then(function(){location.reload();});

        }
    });
}
$(function(){
    
    spinApp.spinnerClick();
    spinApp.submitButton();
});
