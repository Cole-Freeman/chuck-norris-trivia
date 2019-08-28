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
    url: "https://opentdb.com/api.php?amount=1&category=26&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function(result){
    // spinApp.celebs = result.results[0].category;
    // console.log(result.results[0])
    return result.results[0];
})


spinApp.sport = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    return result.results[0];
})

spinApp.geo = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    console.log(result)
    return result.results[0];
})

spinApp.animals = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    return result.results[0];
})

spinApp.science = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    return result.results[0];
})

spinApp.tv = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=14&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then(function (result) {
    return result.results[0];
})

spinApp.music = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple",
    type: 'GET',
    dataType: 'json',
}).then((result) => {
    return result.results[0];
})


spinApp.film = $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple",
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
    console.log(randomNumber, array[randomNumber])
    return array[randomNumber];
};

// console.log(spinApp.randomCategory(spinApp.categories));

$(function(){
    // spinApp.randomCategory(spinApp.categories);
    // these are both spreads
    $.when(...spinApp.categories).then((...res) =>{
        spinApp.categories = res;
        // console.log(res, spinApp.categories);
        spinApp.randomCategory(spinApp.categories);
    })
});

