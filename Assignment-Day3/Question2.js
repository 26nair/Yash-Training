
class MyConsole{
  consolelist=[];
   constructor() {

   }

    printlog(input) {
     this.consolelist.push(input);
    //  return input;
   }

   history(){
    for (var i in this.consolelist){
      console.log(this.consolelist[i]);
    }

  }

  clearHistory(){
    this.consolelist = [];
  }
}

//creating an instance

const consoletest= new MyConsole();

consoletest.printlog("123");
consoletest.printlog("Hey");
consoletest.history();
