// function with expression

const printMe = function () {
  console.log("Print the printMe function");
};

printMe();

const printMeAgainWithParameter = function (name1, name2) {
  console.log(name1 + " weds " + name2);
};

printMeAgainWithParameter("Safin", "Mahi");

const multipleFunction = function () {
  return "Safin";
};

const newFunction = function (name2) {
  return multipleFunction() + " weds " + name2;
};

console.log(newFunction("Mahi"));

const addition = function (a, b, c) {
  return a * b + c;
};

console.log(addition(23, 34, 44));

let conditional = function (mark) {
  if ( mark >= 80) {
    console.log("A+");
  } else if (mark >=70 && mark <= 79) {
    console.log("A");
  } else if (mark>=60 && mark <= 69) {
    console.log("B");
  } else {
    console.log("You failed better luck next time");
  }
};

conditional(56);
