// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  // get all button elements
  var btns= document.querySelectorAll(".btn");
  // loop through button elements 
  for (var i = 0; i < btns.length; i++) {
    // add event listener to each button 
    btns[i].addEventListener("click", function(event) {
      // prevent page from reloading/default action
      event.preventDefault();
      // console log previous element sibling (should be the textarea)
      console.log(btns[i].previousElementSibling);
      // get text from the teaxtarea element
      var myText = btns[i].previousElementSibling.value
      // set the key for local storage using the parent element id value
      var key = btn.parentElement.id
      // save info in localstorage
      localStorage.setItem(key, myText);
    });
  }

  // TODO: 
  
  // btn9.addEventListener("click", function(event) {
  //   event.preventDefault();

  //   var myText = document.querySelector("#textarea").value;
  //   console.log(myText)


  //   localStorage.setItem("hour9", myText);
  //   // localStorage.setItem("hour10", hour10);
  //   // localStorage.setItem("hour11", hour11);

  //   }
  // );
  
  // btn10.addEventListener("click", function(event) {
  //   event.preventDefault();

  //   var myText = document.querySelector("#textarea").value;
  //   console.log(myText)


  //   localStorage.setItem("hour9", myText);
  //   // localStorage.setItem("hour10", hour10);
  //   // localStorage.setItem("hour11", hour11);

  //   }
  // );

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(today);
  console.log(today)
// });




