function createPtag(textData) {
  var ptag = document.createElement("p");
  ptag.innerHTML = textData;
  ptag.classList.add("form-tool");
  ptag.style.fontSize = "3vw";
  document.body.appendChild(ptag);
}

function doo() {
  let targetbody = document.getElementById("inpt");
  targetbody.value = "";
  console.log(targetbody);
  let buton = document.createElement("button");
  buton.innerText = "This for clear All";
}
//add two number
function ATN() {
  // parseFloat is use for convert to valoat value
  var a = parseFloat(document.getElementById("ValueOne").value);
  var b = parseFloat(document.getElementById("ValueTwo").value);

  let store = a + b;
  // this is for confirm button to check the aler
  var okay = confirm(store + " " + "Is correct results ");
  if (okay) {
  } else {
    console.log("not ok");
  }
  window.onunload = function () {
    return confirm("Are you sure you want to leave this page?");
  };
}
// -----------------
var today = new Date();
console.log(Date());
createPtag(today);

var dayy = today.getDay();
let fuctnANDtext = "Day:" + dayy;
createPtag(fuctnANDtext);

// --------------
