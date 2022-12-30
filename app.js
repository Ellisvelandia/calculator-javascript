function Init() {
  let maindisplay = document.getElementById("maindisplay");
  let equation = document.getElementById("equation");
}

function Addition() {
  if (maindisplay.innerHTML == "0") {
    maindisplay.innerHTML = "0";
  } else {
    equation.innerHTML += parseInt(maindisplay.innerHTML);
    maindisplay.innerHTML = "0";
    equation.innerHTML += "+";
  }
}

function Substraction() {
  if (maindisplay.innerHTML == "0") {
    maindisplay.innerHTML = "0";
  } else {
    equation.innerHTML += parseInt(maindisplay.innerHTML);
    maindisplay.innerHTML = "0";
    equation.innerHTML += "-";
  }
}

function Multiplication() {
  if (maindisplay.innerHTML == "0") {
    maindisplay.innerHTML = "0";
  } else {
    equation.innerHTML += parseInt(maindisplay.innerHTML);
    maindisplay.innerHTML = "0";
    equation.innerHTML += "*";
  }
}

function Division() {
  if (maindisplay.innerHTML == "0") {
    maindisplay.innerHTML = "0";
  } else {
    equation.innerHTML += parseInt(maindisplay.innerHTML);
    maindisplay.innerHTML = "0";
    equation.innerHTML += "/";
  }
}

function Equalto() {
  equation.innerHTML += maindisplay.innerHTML;
  maindisplay.innerHTML = eval(equation.innerHTML);
  equation.innerHTML = "";
}

function Keypressed(key) {
  if (maindisplay.innerHTML == "0") {
    maindisplay.innerHTML = key;
  } else {
    maindisplay.innerHTML += key;
  }
}

function Clear() {
  maindisplay.innerHTML = "0";
  equation.innerHTML = "";
}
