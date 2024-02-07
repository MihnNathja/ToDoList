window.onload = async function() {
  const data = await importData();
  console.log(data);
  for (i in data)
  {
    addNewElement(data[i].info);
  }
};
function addNewElement(inputValue)
{
  var newElement = document.createElement("li"); 
  var text = document.createTextNode(inputValue);
  newElement.appendChild(text);
  document.getElementById("data").appendChild(newElement);
}
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
      addNewElement(inputValue);
    }
  });
async function submitData(inputData)  {
  await fetch('http://127.0.0.1:5000//postData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "info": inputData
    }),
  })
}
async function importData() 
{
  const data = await fetch('http://127.0.0.1:5000//getData')    
  .then(response => response.json())
  .then();
  return data;
}