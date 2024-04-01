function createPtag(textData, id) {
  var ptag = document.createElement("p");
  ptag.innerHTML = textData;
  ptag.classList.add("form-tool");
  ptag.style.fontSize = "3vw";
  console.log(id);
  // var ccc = document.getElementById(id);
  document.getElementById("cd").innerHTML = textData;
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
// -----------------cick btn show date----------
function showDate() {
  var today = new Date();
  // var today.toJSON
  var idr = document.getElementById("cd");
  console.log(idr);
  var locall = today.toLocaleDateString();
  var hourss = today.getHours();
  var minutess = today.getMinutes();
  var innertxt =
    "right now it is" + locall + "" + "at" + hourss + ":" + minutess;

  createPtag(innertxt, idr);
}
// --------------DAte difference script-----------------

function process() {
  // ------------get input values from index file-------------
  var start = document.getElementById("start");
  var end = document.getElementById("end");
  var output = document.getElementById("output");
  //   ---------------------------output value-----------------------
  var message = "";
  var interval = "";
  var day = 1000 * 60 * 60 * 24;
  // --------------------two new date---------
  var startDate = new Date(start.value);
  var endDate = new Date(end.value);
  // -------------------conditions-------------
  if (startDate.getTime() && endDate.getTime()) {
    if (startDate < endDate) {
      var diff = endDate - startDate;
      if (diff <= day) {
        interval = "1day";
      } else {
        interval = Math.round(diff / day) + " days";
      }
    }
  }
  message = interval + " Differnece";
  output.innerText = message;
}
// -------------------Working with array----------------------
function addTask() {
  var inputtask = [];
  // console.log(lenght + "its  input NO");
  // ----get HTML Element
  var task = document.getElementById("task");
  var outputStatus = document.getElementById("outputStatus");
  // declare variable for output
  if (task.value) {
    inputtask.push(task.value);
    task.value = "";
    alert("push done");
  } else {
    alert("ERror re Enter the task");
    return;
  }
  var lenght = inputtask.length;
  if (lenght !== 0) {
    var messageStatus = "";
    messageStatus = "you have " + lenght + " task(s) in your to-do list.";
    outputStatus.innerText = messageStatus;
  }
  // add task into Array
}
