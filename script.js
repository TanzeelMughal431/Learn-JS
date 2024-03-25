document.write("HEllo World");

function doo() {
  let targetbody = document.getElementById("inpt");
  targetbody.value = "";
  console.log(targetbody);
  let buton = document.createElement("button");
  buton.innerText = "This for clear All";
}
//add two number
function ATN() {
  let a = document.getElementById("ValueOne").value;
  let b = document.getElementById("ValueTwo").value;
  let store = a+b;
  alert(store);
}
