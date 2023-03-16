var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  
  if (name && age) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://script.google.com/macros/s/AKfycbwV9_FPYI_0zA9JV4IPQ9xBJi0uT2H81ihu8OlkYGDAyDvo8TttxUPTXo8vr02HNjs/exec?name=' + name + '&age=' + age);
    xhr.send();
  } else {
    alert("Please enter both name and age.");
  }
});
