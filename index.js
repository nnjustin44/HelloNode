console.log("Welcome");

sayHello("Justin");
sayHello("Bubba");
sayHello(process.argv[2]);
function sayHello(userName) {
  console.log("Hello " + userName);
}
