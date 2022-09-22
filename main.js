"use strict"

let num;
function myId(clicked_id) {
  //return button value
   num = document.getElementById(clicked_id).value;

   let prevButton = null;

   const numCont = document.getElementById("numCont");
if(numCont) {
   numCont.addEventListener("click", (e) => {

   const isButton = e.target.nodeName === "BUTTON"; 
if (isButton) {
   // Add .active CSS Class
   e.target.classList.add("active");
  }

if (!isButton) {
    return;
  }
 
if(prevButton !== null) {
  // Remove .active CSS Class
    prevButton.classList.remove("active");
  }
  
  prevButton = e.target;

   });
  }
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
