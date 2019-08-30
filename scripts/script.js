  
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

let answerObjectSave = "";

spinApp.spinnerClick = function (){

    $("button").on("click", function () {

        const turnsLeft = $(".turns").text();

        $(".quiz").html(``);

        if (turnsLeft > 0) {

            const selectedCat = spinApp.randomCategory(spinApp.cat);
            const success = spinApp.singleAjaxCall(selectedCat.id);
        
            $.when(success).then((answerObject) => {
                
                $(".quiz").html(`<h2>${answerObject.category}</h2><p>${answerObject.question}</p>
                <form action="#">
                    <label for="true">True</label>
                    <input type="radio" name="answers" id="true" value="True">
                
                    <label for="false">False</label>
                    <input type="radio" name="answers" id="false" value="False">
                
                    <input type="submit" class="submit" value="Submit!" id="submit-button">
                    <label for="submit-button" class="visually-hidden">Click to submit answer</label>
                </form>`);
        
                $('.turns').text(Number($(".turns").text()) - 1);

                answerObjectSave = answerObject;
            })

        } else {
            // switch this to sweet alert
            if(!swal('Game Over! Play again?')){window.location.reload();}
        }

        $(".verdict").html(``)

        // added clear verdict html upon spinner spinz
    
    });
}

spinApp.submitButton = function () {
    $("form").on("submit", function (event) {
        event.preventDefault();

        const userAnswer = $(`input[name=answers]:checked`).val();
        const ajaxAnswer = answerObjectSave.correct_answer;
        const incorrectAnswer = answerObjectSave.incorrect_answers;

        if (ajaxAnswer === userAnswer) {
            $(".verdict").html(`<p>That's right!  You get 5 points! Spin Again</p>`)
            $('.score').text(Number($(".score").text())+5);

        } else if (incorrectAnswer == userAnswer) {
            $(".verdict").html(`<p>Incorrect Answer, Spin Again</p>`)
            
        }  else {
            $(".verdict").html(`<p>Select an answer!</p>`)
        }

    });

}

$(function(){
    
    spinApp.spinnerClick();
    spinApp.submitButton();

});
