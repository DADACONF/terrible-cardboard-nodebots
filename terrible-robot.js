var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
	var servol = new five.Servo(3);
	servol.sweep();
});