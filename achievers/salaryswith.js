
const vu = require("prompt-sync");
const prompt = vu();

var salary = prompt("enter your salary : ");
switch (true) {
  case salary >= 80000:
    alert("your an a grade employee");
    break;
  case salary >= 60000 && salary < 80000:
    alert("your an b grade employee");
    break;
  case salary >= 40000 && salary < 60000:
    alert("your an c grade employee");
    break;
  case salary >= 20000 && salary < 40000:
    alert("your an a grade employee");
    break;
  default:
    alert("you are a freher");
}
