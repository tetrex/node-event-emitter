// get the reference of EventEmitter class of events module
var events = require("events");
let second = require("./second");
//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();

//Subscribe for FirstEvent
em.on("FirstEvent", function (data) {
	console.log("First subscriber: " + data);
});
second.testFunction(em);

// Raising FirstEvent
em.emit("FirstEvent", "This is my first Node.js event emitter example.");
