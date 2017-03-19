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
            if (request.status === 200) {
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
   request.open('GET', 'http://theankurpandey.imad.hasura-app.io/counter' , true);
   request.send(null);
   
}


//Submt name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
function  s1() {
    //Make a request to the server and send the name
    
    //Create a request object
   var request = new XMLHttpRequest();
   
   //Capture the response and store it in a variable
   request.onreadystatechange = function (){
       if (request.readyState === XMLHttpRequest.DONE) {
            // everything is good, the response is received
            if (request.status === 200) {
            //Capture a list of names and render it as a list
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for(var i = 0 ; i<names.length ; i++){
                list += '<li>' + names[i] + '</li>' ;
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
                
            }
       } 
       //not done yet
   };
   
   //Make the request 
   request.open('GET', 'http://theankurpandey.imad.hasura-app.io/submit-name?name=' + name , true);
   request.send(null);
    
    
}
