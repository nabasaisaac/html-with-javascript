function greet(){
  alert('Welcome to my dynamic application')
  document.getElementById('click').onclick = function(){
    alert("Button was clicked")
  }
}

function changeColor(){
  document.body.style.backgroundColor = "lightblue"; 

}

let text = 0;
function changeText(){
  if (text === 0){
    document.getElementById('text').innerText = 'testing inline JS'
    text = 1
  }else{
    document.getElementById('text').innerText = 'This is the first HTML, CSS and Javascript'
    text = 0
  }

}

function enterColor() {
  let userInput = prompt("Enter your favorite color 🙇‍♂️:");

  try {
      // Check if input is empty
      if (!userInput) {
          document.body.style.backgroundColor = "red";  // Default to red
      } else {
          // Validate the color using the built-in function `CSS.supports`
          if (CSS.supports("color", userInput)) {
              document.body.style.backgroundColor = userInput;  // Apply the valid color
          } else {
              throw new Error("Invalid color entered! Please try again.");
          }
      }
  } catch (error) {
      console.log(error.message);  // Log the error message in the console
      alert("Error: " + error.message);  // Display an error message to the user
  }
}
