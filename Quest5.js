do {
  console.log("Main Menu Bar");
  console.log("             ");
  console.log("1.Change Actions");
  console.log("2.Button Layout");
  console.log("3.Keybindings");
  console.log("4.OnEvent Scripts");
  console.log("5.Main Menu Bar");
  console.log("6.Misc Options");
  console.log("7.Unlock Dragging");
  console.log("8.Show Button IDs");
  console.log("9.Show Action IDs");
  console.log("10.COPY");
  console.log("11.PASTE");
  console.log("                 ");
  var num = 0;
  num = prompt("Select a number:");
  console.log("Select a number: " + num);

  if (num == 1) {
    changeActions();
  } else if (num == 2) {
    buttonLayout();
  } else if (num == 3) {
    keyBindings();
  } else if (num == 4) {
    onEventScripts();
  } else if (num == 5) {
    mainMenuBar();
  } else if (num == 6) {
    miscOptions();
  } else if (num == 7) {
    unlockDragging();
  } else if (num == 8) {
    showButtonIDs();
  } else if (num == 9) {
    showActionIDs();
  } else if (num == 10) {
    copy();
  } else if (num == 11) {
    paste();
  }
} while (num != 0);

function changeActions() {
  console.log("I'm inside Change Actions funtion.");
}

function buttonLayout() {
  console.log("I'm inside Button Layout function.");
}

function keyBindings() {
  console.log("I'm inside Key Bindings function.");
}

function onEventScripts() {
  console.log("I'm inside On Event Scripts function.");
}

function mainMenuBar() {
  console.log("I'm inside Main Menu Bar function.");
}

function miscOptions() {
  console.log("I'm inside Misc Options function.");
}

function unlockDragging() {
  console.log("I'm inside Unlock Dragging function.");
}

function showButtonIDs() {
  console.log("I'm inside Show Button IDs function.");
}

function showActionIDs() {
  console.log("I'm inside Action IDs function.");
}

function copy() {
  console.log("I'm inside Copy function.");
}

function paste() {
  console.log("I'm inside Paste choice.");
}
