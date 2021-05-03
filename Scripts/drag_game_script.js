function testGet() {
    // this function is used to debug 
    // and get the offsetleft of nest and bird object
    var nest = document.getElementById("nest");
    var bird = document.getElementById("bird");
    console.log("nest left : " + nest.offsetLeft);
    console.log("bird left : " + bird.offsetLeft);
    console.log( "maring left: " + bird.style.marginLeft+1, typeof(bird.style.marginLeft));
}

function moveBird(){
    // this function used to move the bird when the user hover the bird.
    // used in onmouseover in bird class
    // learn from 9a-24-1.html
    // to use offset
    var bird = document.getElementById("bird");
    
    // https://stackoverflow.com/questions/14275304/how-to-get-margin-value-of-a-div-in-plain-javascript
    var marginLeftNew = window.getComputedStyle(bird).marginLeft;

    // inspired by 9a-7 Conversion betwween data types.html
    // converting maringLeft in string to int using parseInt
    marginLeftNew.replace("px","");
    marginLeftNew = parseInt(marginLeftNew);
    marginLeftNew = marginLeftNew + 200;
    console.log("new margin: " + marginLeftNew, typeof(marginLeftNew));
    bird.style.marginLeft = marginLeftNew +'px';
    checkWin();
}

function checkWin() {
    // this function is used to check if bird already arrive at nest
    var bird = document.getElementById("bird");
    var nest = document.getElementById("nest");

    // get bird width;
    var birdWidth = window.getComputedStyle(bird).width;
    birdWidth.replace("px","");
    birdWidth = parseInt(birdWidth);
    
    // if nest offset equal or smaller than birdoffest + width, then win
    if(bird.offsetLeft + birdWidth >= nest.offsetLeft){
        // show the winning banner to the user
        var stateDisplay = document.getElementById("state_display");
        stateDisplay.setAttribute("winorlose","win");
        stateDisplay.innerText = "Congratulations!";
        stateDisplay.style.top = '0%';
        // learn from 9a-21 How to stop the timer.html
        // used to auto reload the page after winning the game
        var timer = setTimeout(() => {
            location.reload();
        }, 1800);
    }
}

function resetBird(){
    // this function is used to reset the bird position to normal
    // learn from 9a-24-1.html
    // to use offset
    var bird = document.getElementById("bird");
    bird.style.marginLeft = "0px";
}

