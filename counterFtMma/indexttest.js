// step 1: make variables to get everything you will work with 
// step 2: add event listeners for the increase and decrease buttons, have them increase or decrease the textcount as the case may be , and change color to indicate
// step 3: define the color chabges you want using the change in the value of the count variable using if else statements

// here we create the variables to get every elemenet we're going to work with 
const count = document.getElementById('count');
// got the div using it's id of count
const decrease = document.querySelector('#decrease');
const increase = document.querySelector('#increase');
// you can get said elements using getElementByx id, class or otherwise or quesry selector. 
// getElementBy gets element using it's id word in quotes while query got it by using it's css version i.e #decrease to get the element with the id of decrease 
// or .sm-box if we wanted to get the element increase or decrease div


decrease.addEventListener("click", () => {
    count.textContent = parseInt(count.textContent) - 1;
    changeColor();
});
// here we listen for a click as the event to change the counter 
// when the click event happens to the increase variable, do the increase and then also change it's color 
increase.addEventListener("click", () => {
    count.textContent = parseInt(count.textContent) + 1;
    changeColor();
});
// here we defined what the change color function actually does 
// if the text content of the count variable is <0 change it to red 
// then if it's equal to zero change to black
// otherwise (like when its >0) make it green 
function changeColor() {
    if(count.textContent < 0) {
        count.style.color = "red";
}else if(count.textContent === "0") {
    count.style.color = "black";
}else {
    count.style.color = 'green';
}

}

// questions 
// why didnt parsefloat work?
// === vs == vs = 
// why didnt a normal function declaration work?



// extras / normal function using parsefloat that didnt work 
// function decrease () {
//     let num = parseFloat(count.textContent);
//     num = num - 1;
// count.textContent = num;

// }