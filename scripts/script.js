// Pseudo Code

// Randomize function

// Make ajax call for each category - store it in a variable

// store ajax variables in an array

// Randomize categories from that array

// Event listener for button,
    //  clear board(if content)
    //  If turns available - randomized category(displays over wheel) and question(displays in question interface) form api(ajax call is filtered to limit results).
    //  Take a turn away


// Event listener for question answers - if true deliver message and add score, else just deliver message.
    // When no turns available, 
    // game over.Display score(pop up has a try again button) 
  
const spinApp = {};


// Ajax calls for the different Categories 
spinApp.celebs = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=26&difficulty=easy&type=boolean",
    type: 'GET',
    dataType: 'json',
}).then(function(result){
    return result.results[0];
})


spinApp.sport = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=boolean",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    return result.results[0];
})

spinApp.geo = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=boolean",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    // console.log(result)
    return result.results[0];
})

spinApp.animals = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=boolean",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    return result.results[0];
})

spinApp.science = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=boolean",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    return result.results[0];
})

spinApp.tv = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=14&difficulty=easy&type=boolean",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    return result.results[0];
})

spinApp.music = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=boolean",
    type: 'GET',
    dataType: 'json',
}).then((result) => {
    return result.results[0];
})


spinApp.film = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=boolean",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    return result.results[0];
})


// Array of categories for randomizing (promises)
spinApp.categories = [spinApp.animals, spinApp.celebs, spinApp.geo, spinApp.music, spinApp.science, spinApp.sport, spinApp.tv, spinApp.film];

// Randomize function
spinApp.randomCategory = function (array) {
    // console.log("pls work");
    const randomNumber = Math.floor(Math.random() * this.categories.length);
    // console.log(randomNumber, array[randomNumber])
    return array[randomNumber];
};

spinApp.spinnerClick = function (){
    // why wont button click work in here? motherfucker
    $("button").on("click", function () {
        console.log("clicked");
        // console.log(randomResult.category, randomResult.question);
    
        $(".quiz").html(`<h2>${randomResult.category}</h2><p>${randomResult.question}</p>
        <label for="true">True</label>
        <input type="radio" name="answers" id="true" value="True">
    
        <label for="false">False</label>
        <input type="radio" name="answers" id="false" value="False">
    
        <input type="submit" class="submit" value="Submit!" id="submit-button">
        <label for="submit-button" class="visually-hidden">Click to submit answer</label>`);
    
    });
}

spinApp.submitButton = function (){

    $(".submit").on("submit", function (event) {
        event.preventDefault();
    
        const userAnswer = $(`input[name=answers]:checked`).val();
    
        const ajaxAnswer = randomResult.correct_answer;
    
        console.log(ajaxAnswer);
    
        // console.log(userAnswer);
    
        if (ajaxAnswer === userAnswer) {
            console.log('you win');
    
        } else if (ajaxAnswer !== userAnswer) {
         console.log('you suck!')
        } 
    
    });
}


$(function(){
    // these ... are both spreads
    $.when(...spinApp.categories).then((...res) =>{
        spinApp.categories = res;
        randomResult = spinApp.randomCategory(spinApp.categories);
        // console.log(res, spinApp.categories);
    });

    spinApp.spinnerClick();
    spinApp.submitButton();

});


// issues on issues on issues

//  will need to randomise the location of the answer so it doesn't always display the same

// push all possible answers into array and randomise from array. loop to display.
// question only updates when page is refreshed?? Other data need to stay- might need to use firebase to save user data and then force a refresh after each spin
// he.js decoder needs to run on question??


// for true or false we need 
// display radio buttons with value of true or false to screen. 
// check value of radio with if else statement
// why is form submitting???
