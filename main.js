"use strict"

let num;
let prevButton;
const numCont = document.getElementById('numCont');

function myId(clicked_id) {
  // returns button value
  num = document.getElementById(clicked_id).value;

  numCont.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';

     if (!isButton) return;

     // remove .active class from button
     prevButton?.classList.remove('active');

     if (isButton) {
      // add .active class to button
      e.target.classList.add('active');
    }

    prevButton = e.target;
  })
}


function hido() {
  // Submission
  // if value of button is returned hide/show different content
   if(num) {
    document.getElementById("res").innerHTML = num;
    const con1 = document.getElementsByClassName("container1")[0];
    con1.style.display = "none";
    const con2 = document.getElementsByClassName("container2")[0];
    con2.style.display = "block";
  } else {
    // If value has not been chosen on submition, user is noticed
    alert("Choose one of the value, and than submit.")
     return;
  }
 
}
