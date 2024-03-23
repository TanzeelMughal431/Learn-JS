document.write("HEllo World");

function doo() {
  let targetbody = document.getElementById("contatiner");
  targetbody.innerHTML = "";
  console.log(targetbody);
  let buton = document.createElement("button");
  buton.innerText = "This for clear All";
}
