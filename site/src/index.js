import "./main.css"
import problem from "./0/problem.md"
import input from "./0/input.txt"
import output from "./0/output.txt"


// node.js, the same, but with sugar:
var md = require('markdown-it')();
var result = md.render(problem)

document.getElementById("problem").innerHTML = result

document.getElementById("download").addEventListener("click", download);
function download() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(input));
  element.setAttribute('download', "input.txt");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


document.getElementById("submit").addEventListener("click", submit);
function submit() {
  let myVal = document.getElementById("my-output").value;

  if (myVal.replace(/\s/g, '') === output.replace(/\s/g, '')) {
    alert("Correct!");
  }
  else {
    alert("Incorrect!");
  }

}