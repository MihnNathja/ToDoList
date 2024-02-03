document.getElementById("myInput").addEventListener("keypress", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Get the value of the input field
      var inputValue = this.value;
      // phần get data nằm ở dưới chỗ này
      console.log(inputValue);
    }
  });
