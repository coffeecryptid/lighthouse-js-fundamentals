// shows how f(x) works wherein you pass data/etc throuh the fucntion and can keep calling it
const sayHello = function(name){
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
// shows diff. b/w consolelog and return-- console displays data, return returns data to be used
const sayHelloToConsole = function(name) {
  console.log("Hello, " + name);
}

sayHelloToConsole("John");

const returnSayHello = function(name){
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);


