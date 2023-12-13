do {
    
    console.log("1- Load");
    console.log("2- Save");
    console.log("3- Play");
    console.log("4- Help");
    console.log("5- Quit");
    console.log("                 ");
    
    var num = 0;
    num = prompt("Make a Selection:");
    console.log("Make a Selection: " + num);
  
    if (num == 1) {
      Load();
    } else if (num == 2) {
      Save();
    } else if (num == 3) {
      Play();
    } else if (num == 4) {
      Help();
    } else if (num == 5) {
      Quit();
      num = 0
    } else {
        console.log("Invalid Entry!")
    }

  } while (num != 0);
  
  function Load() {
    console.log("Loading game...");
   
  }
  
  function Save() {
    console.log("Saving status...");
  }
  
  function Play() {
    console.log("Lets Play!");
  }
  
  function Help() {
    console.log("Here's your help.");
  }
  
  function Quit() {
    console.log("Game Over!.");
  }
  
  