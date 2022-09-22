# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Interactive_rating_component](/images/Thank_you.jpg)

### Links

- Solution URL: https://github.com/Darionas/interactive-rating-component
- Live Site URL: 

## My process

* Set HTML layout:
  * create two identical containers.
* Create CSS external file to set style for HTML layout:
  * Choose to use responsive web design:
    * include meta viewport element in my web page.
    * use rem css unit for all HTML elements.
  * Use css techniques to center vertically or horizontally:
    ```css
    /*center horizontally*/
    .im {
      display: block;
      margin-inline: auto; 
    }

    /*center horizontally and vertically*/
    .starCont {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ```
  * Set colors, font size and family according `style-guide.md`
* Create external JavaScript file:
  * return button value from clicked button
  * add .active css class
  * remove .active css class
  * on submitting set css properties via javaScript to hide/show one of two containers.

### Built with
It is based on:

- Semantic HTML5 markup
- CSS (RWD):
  - Flexbox
  - css unit(rem)
- JavaScript

### What I learned

In this challenge I learned:

- how to return button value onclick in javaScript.
- how to make a selected or clicked button active in JavaScript without Loop.

```html
<div id="numCont">
      <button id="n1" onclick="myId(this.id)" class="num" value="1">1</button>
      <button id="n2" onclick="myId(this.id)" class="num" value="2">2</button>
      <button id="n3" onclick="myId(this.id)" class="num" value="3">3</button>
      <button id="n4" onclick="myId(this.id)" class="num" value="4">4</button>
      <button id="n5" onclick="myId(this.id)" class="num" value="5">5</button>
      </div>
      <button id="btn" onclick="hido()">SUBMIT</button>
```
```css
.active {
    background-color: hsl(216, 12%, 54%);
    color: hsl(0, 0%, 100%);
}
```
```js
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
```

### Continued development

- Markdown Guide.
- JavaScript.

### Useful resources

- [Make a selected/clicked button active in JavaScript](https://softauthor.com/make-selected-clicked-button-active-in-javascript/) - This helped me to make a selected or clicked button active in JavaScript without Loop.

## Author

- Frontend Mentor - [@Darionas](https://www.frontendmentor.io/profile/Darionas)

## Acknowledgments

Thank you Frontend Mentor team for opportunity to try, practice, train yourself in different level challenges and gain invaluable experience.
