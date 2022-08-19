const vu = require("prompt-sync");
const prompt = vu();

var salary = prompt("Type your salary");
if (salary >= 80000) {
  alert("Congrats,You are an A grade employee");
} else if (salary >= 65000 && salary < 80000) {
  alert("Congrats,You are a B grade employee");
} else if (salary >= 40000 && salary < 65000) {
alert("Congrats,You are a C grade employee");
} else if (salary >= 20000 && salary < 40000) {
alert("Congrats,You are a D grade employee");
} else {
alert("Congrats,You are a fresher");
}
