document.getElementById("myInput").addEventListener("keypress", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Get the value of the input field
      var inputValue = this.value;
      // phần post data
      submitData(inputValue);
      // chèn vào DOM
      var newElement = document.createElement("p"); 
      var textNode = document.createTextNode(inputValue); // Create a text node with input value
      newElement.appendChild(textNode); // Append the text to <p>
      document.getElementById("content").appendChild(newElement);// Append <p> to the "content"
    }
  });
function submitData(inputData) {
  fetch('http://127.0.0.1:5000//postData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "info": inputData
    }),
  })
}