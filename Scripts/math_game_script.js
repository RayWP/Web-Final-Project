var card_id = ["card_question", "card_option_1", "card_option_2","card_option_3"];
var operator = ["+", "-", "*", "/"];
var stateDisplay;
var number1, number2, opt, result;

function makeQuestion() {
    // this function is used to make questions
    var card_question = document.getElementById(card_id[0]);
    console.log("ola" + card_question);

    // line 11 to 25 is used to generate random question
    if(card_question!=null){
        // get number and operator
        number1 = Math.floor(Math.random() * 10);
        number2 = Math.floor(Math.random() * 10);

        if(number2 == 0){
            // to prevent divide by zero
            number2 += 1;
        }

        opt = operator[Math.floor(Math.random()*10) % operator.length];
        var clgtest = number1 + " " + opt + " " + number2;
        console.log(clgtest);
        console.log(typeof(clgtest));

        // set the result after getting number1, number2, and opt
        setResult();
        makeAnswer();
        setStateWinLose();
        card_question.innerText = clgtest;
    }
}

function setResult() {
    // this function is used to make the get the correct result
    // learn switch case from 9a-12
    switch (opt) {
        case "+":
            result = number1 + number2;
            break;
            
        case "-":
            result = number1 - number2;
            break;
        
        case "*":
            result = number1 * number2;
            break;
        
        case "/":
            result = number1 / number2;
            result = result.toFixed(2);
            break;
    }
}

function makeAnswer() {
    // this function is used to set different options
    // to the element
    // learn from 9a-19Common operations on arrays3.html

    //get card_id for options only excluding the questions id
    var option_array = card_id.slice(1,4); 
    // make the correct answer position random
    var answer_location = Math.floor(Math.random()*10) % option_array.length;

    // set the result to the correct answer position
    var right_answer = document.getElementById(option_array[answer_location]);
    right_answer.innerHTML = result;
    right_answer.setAttribute("correct","true");

    // remove correct answer from the array, leaving only the wrong one
    option_array.splice(answer_location,1);

    // learn from 9a-13loop.html
    // set the wrong options
    for (let i = 0; i < option_array.length; i++) {
        result = i + result + 1;
        var wrong_answer = document.getElementById(option_array[i]);
        wrong_answer.innerHTML = result;
        wrong_answer.setAttribute("correct","false");
    }
    
}

function setStateWinLose(){
    // this function used to attach onclick function
    // to each options
    // if the options has correct attribute, it will show "win"
    stateDisplay = document.getElementById("state_display");
    for (let i = 1; i < card_id.length; i++) {
        // learn from 9a-3jCommon events.html
        document.getElementById(card_id[i]).onclick = function(){
            // check if this card is the correct one, it will set onclick to "win/correct",
            // else it will set onclick to lose/wrong answer"
            if (document.getElementById(card_id[i]).getAttribute("correct") == "true") {
                stateDisplay.setAttribute("winorlose","win");
                stateDisplay.innerText = "Correct!";
                
            }else{
                stateDisplay.setAttribute("winorlose","lose");
                stateDisplay.innerText = "Wrong answer";
            }
            // https://stackoverflow.com/questions/2460662/how-to-set-width-of-a-div-in-percent-in-javascript
            stateDisplay.style.top = '0%';
            // learn from 9a-21 How to stop the timer.html
            // used to auto reload the page after win/lose the game
            var timer = setTimeout(() => {
                location.reload();
            }, 1800);
        }
    }
}

