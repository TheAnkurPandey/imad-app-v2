console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById("main-text");
element.innerHTML = "HI Ankur Pandey";

//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function () {
    var interval = setInterval(moveRight , 100);
   
};
console.log('Hi ankur pandey');
