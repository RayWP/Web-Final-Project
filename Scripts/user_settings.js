
// inspired from 9a-9A how to write a functions
function getUserDataFromForm(){
    // get all input from users in index page and settings
    // [0] is name
    // [1] is email, [2] is hobby, [3] is how they find this website
    var name_tag = document.getElementsByTagName("input");
    
    // learn from 9a-14 JSON.html
    var user_json = {
        "name" : name_tag[0].value,
        "email" : name_tag[1].value,
        "hobby" : name_tag[2].value,
        "how" : name_tag[3].value,
    }

    saveUser("user_data", user_json);
}

function saveUser(key, json){
    // inspired by 9a-7Conversion between data types.html
    // this function used to get JSON from javascript
    // and store it in String type.
    var user_string_json = JSON.stringify(json);
    window.localStorage.setItem(key,user_string_json);
    console.log("Saved data");
}

function setUserName(){
    // this function is used to set
    // the username in the header of every page
    var name_bar = document.getElementById("name_bar");
    
    // learned from 9a-12.the judgement for JS.html
    if (name_bar != null) {
        
        try {
            name_bar.innerText = "Hello, " + getUser("user_data")['name'];
        } catch (error) {
            name_bar.innerText = "Hello, " + "new user";
        }
        console.log("name set!!");
    }
    else{
        console.log("objct is null");
    }
    
}
function getUser(key){
    // inspired by 9a-7Conversion between data types.html
    // this function used to get user data as a string from storage
    // and convert to JSON
    var user_data = window.localStorage.getItem(key);
    console.log("ger user sessioN: " + user_data);   ``
    return JSON.parse(user_data);   
}

function logOut(){
    // this function used for clearing the login existing user
    // without deleting the background color setting
    window.localStorage.removeItem("user_data");
}

function saveBackgroundColorFromForm() {
    
    // this function used to save user preferred background color
    var color1 = document.getElementById("color_1");
    var color2 = document.getElementById("color_2");
    var color3 = document.getElementById("color_3");
    var color4 = document.getElementById("color_4");
    
    
    var background_color_json = {
        "color1" : color1.value,
        "color2" : color2.value,
        "color3" : color3.value,
        "color4" : color4.value,
    };
    saveUser("background_color", background_color_json);

}

function setUserDataToForm() {
    // this function is used to get data from storage
    // and set the value to the form in settings.html
    var current_user_json = getUser("user_data");
    var name_tag = document.getElementsByTagName("input");

    console.log("Set uer data to form");

    // learn from 9a-14 JSON.html
    name_tag[0].value = current_user_json.name;
    name_tag[1].value = current_user_json.email;
    name_tag[2].value = current_user_json.hobby;
    name_tag[3].value = current_user_json.how;

    setUserColorToForm();
    
}

function setUserColorToForm() {
    // this function is used to get color from storage
    // and set the color value to the form in settings.html

    var current_color_json = getUser("background_color");

    if (current_color_json == null || current_color_json == undefined) {
        current_color_json = defaultBackgroundColor();
    }

    var color1 = document.getElementById("color_1");
    var color2 = document.getElementById("color_2");
    var color3 = document.getElementById("color_3");
    var color4 = document.getElementById("color_4");

    color1.value = current_color_json.color1;
    color2.value = current_color_json.color2;
    color3.value = current_color_json.color3;
    color4.value = current_color_json.color4;
    
}

function defaultBackgroundColor(){
    // to make background color json if user saved color does not exist
    var background_color_json_default = {
        "color1" : "#52057b",  
        "color2" : "#892cdc",
        "color3" : "#bc6ff1",
        "color4" : "#773899"
    }
    return background_color_json_default;
}

function backToPreviousPage(){
    history.back();
}

