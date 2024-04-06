

function startChanging() {
    var boxes = document.querySelectorAll('.box');
    var boxes2 = document.querySelectorAll('.box2');
    var colors = new Array(37).fill('#fff'); 
    var currentIndex = Math.floor(Math.random() * boxes.length); 

 // Random starting index
 document.getElementById('spinBtn').classList.add('hidden');

function changeColor() {
    boxes2.forEach(box => {
    box.style.backgroundColor = 'transparent';
});

boxes2[currentIndex].style.backgroundColor = colors[currentIndex];
currentIndex = (currentIndex + 1) % boxes2.length;
}

var circle = document.querySelector('.container');
var intervalId = setInterval(changeColor, 10);

  
//   SET THE BALL SPEED AND THE SPINNING FOR 15 SECONDS
        circle.classList.add('spin');
        setTimeout(function() {
            clearInterval(intervalId);
            intervalId = setInterval(changeColor, 30);
            

        }, 2000);
        setTimeout(function() {
            clearInterval(intervalId);
            intervalId = setInterval(changeColor, 50);
        }, 4000); 

        setTimeout(function() {
            clearInterval(intervalId);
            intervalId = setInterval(changeColor, 100);
        }, 6000);
        setTimeout(function() {
            clearInterval(intervalId);
            intervalId = setInterval(changeColor, 150);
        }, 8000);
  
  // WINNING NUMBER
        setTimeout(function() {
            let stoppedBox = boxes[(currentIndex - 1 + boxes.length) % boxes.length];
            
            document.getElementById('output').style.display = 'block';
            document.getElementById('output').innerText = stoppedBox.innerHTML;
            document.getElementById('output').classList.add('blink');
            document.getElementById('output').style.backgroundColor=stoppedBox.style.backgroundColor;
            document.getElementById('output').style.color='white';

            clearInterval(intervalId);

            // stoppedBox.classList.add('blink');
            // stoppedBox.style.color='black';
            // stoppedBox.style.backgroundColor='orange';

            boxes[currentIndex-1].classList.add('blink');

        }, 10000);   
        setTimeout(function() {
            clearInterval(intervalId);
            circle.classList.remove('spin');
            boxes[currentIndex-1].classList.remove('blink');
            document.getElementById('output').style.display = 'none';
            document.getElementById('spinBtn').classList.remove('hidden');

        }, 15000);   

}

