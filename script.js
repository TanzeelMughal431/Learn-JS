document.write("HEllo World");

function doo() {
  let targetbody = document.getElementById("inpt");
  targetbody.value = "";
  console.log(targetbody);
  let buton = document.createElement("button");
  buton.innerText = "This for clear All";
}
//add two number 
function ATN(){
  a=document.getElementById("ValueOne");
  b=document.getElementById("ValueTwo");
  let store =a+b;
}