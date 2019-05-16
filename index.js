console.log("Welcome");

sayHello("Justin");
sayHello("Bubba");
sayHello(process.argv[2]);
sayHello("John");
sayHello("Qway");
function sayHello(userName) {
  console.log("Hello ", userName);
}
