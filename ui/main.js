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
var button = document.getElementById('counter');
//var counter = 0;

function b1() {
   //Create a request object
   var request = new XMLHttpRequest();
   
   //Capture the response and store it in a variable
   request.onreadystatechange = function (){
       if (request.readyState === XMLHttpRequest.DONE) {
            // everything is good, the response is received
            if (httpRequest.status === 200) {
            // perfect!
                var counter = request.responseText;
                var span = document.getElementById('count'); 
                span.innerHTML = counter.toString();
            }
       } 
       //not done yet
   };
   
   //Render the variable in correct span
   /*counter = counter + 1;
   var span = document.getElementById('count'); 
   span.innerHTML = counter.toString();*/
   
   //Make the request 
   httpRequest.open('GET', 'http://theankurpandey.imad.hasura-app.io/counter' , true);
   httpRequest.send(null);
   
}

