var i = 0;
var seconds = 1.5;
var color = ["#52057b", "#892cdc", "#bc6ff1","#773899"];

function setFirstColorForBody() {
    // this color used to make the body color
    // to match user saved color.
    getBackgroundColor();
    var body = document.getElementById("body");
    body.style.backgroundColor = color[0];
}

function getBackgroundColor() {

    // get saved color from local storage and parse it to JSON
    var background_color_string = window.localStorage.getItem("background_color");
    var background_color_json = JSON.parse(background_color_string); 
    
    // look color saving json in user_settings.js
    // in saveBackgroundColor() 
    // check if user has save colors, if user never save the colors
    // it will use default color in line 3
    if (background_color_json != null || background_color_json != undefined) {
        // learned from 9a-16 using of json.html
        // on how to access json attribute
        // this code used to get background color saved by user
        color = [
            background_color_json.color1, 
            background_color_json.color2, 
            background_color_json.color3,
            background_color_json.color4,  
        ]
    }
}

// inspired by 9a-4.Manipulate any style of DIV.html
// this function is used to change the background color
function changeColor() {
    var doc = document.getElementById("body");

    // learn from 9a-17 Common operations on arrays1.html
    // line 42-43 is used to rotate the color array
    var current_color = color.shift(); //get current color, and shift it
    color.push(current_color); // and then we push the color back to the end of the array

    doc.style.backgroundColor = color[0];
    doc.style.transition = "all " + seconds +"s ease-in 0s";
    console.log("current transition: "+ doc.style.transition+' '+color[0]);
}

// inspired by 9a-20 about timer.html
// this function is call changeColor() constantly
setInterval(changeColor, color.length * seconds * 500);

