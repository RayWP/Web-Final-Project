// inspired by 9a-25Single object motion frame.html
function enlargeButton(item){
    // this function is to make the button bigger when mouse is hovering
    item.style.height = "100%";
    item.style.backgroundColor = "cornflowerblue"
    console.log(item.style.transition);
}

function smallenButton(item) {
    // this function is to make the button smaller when mouse is leaving
    item.style.height = "60%";
    item.style.backgroundColor = "white"
}


// item.value="ddd";