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

spinApp.celebs = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=26&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function(result){
    // console.log(result);
})

spinApp.sport = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    // console.log(result);
})

spinApp.geo = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    // console.log(result);
})

spinApp.animals = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    // console.log(result);
})

spinApp.science = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    // console.log(result);
})

spinApp.tv = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=14&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    // console.log(result);
})

spinApp.music = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    // console.log(result);
})


spinApp.film = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    // console.log(result);
})

spinApp.categories = [spinApp.animals, spinApp.celebs, spinApp.geo, spinApp.music, spinApp.science, spinApp.sport, spinApp.tv, spinApp.film];

console.log(spinApp.categories);

spinApp.randomCategory = function (array) {
    const randomNumber = Math.floor(Math.random() * this.categories.length);
    return array[randomNumber];
}


$(function(){
    randomCategory(spinApp.categories);
});


