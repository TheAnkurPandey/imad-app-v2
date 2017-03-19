console.log('Loaded!');

//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
function myFunction() {
    var interval = setInterval(moveRight , 100);
}

//counter code
var button = getElementById('counter');
var counter = 0;
button.onClick =function() {
   //Make a request to counter endpoint
   
   //Capture the response and store it in a variable
   
   //Render the variable in correct span
   counter = counter + 1;
   var span = document .getElementById('count'); 
   span.innerHTML = counter.toString();
   
}

