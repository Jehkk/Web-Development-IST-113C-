"use strict";

// using a function contructor form to create an object
function MyApp()
{
	var version = "v1.0";

	// creating a private function
	function setStatus(message)
	{
		$("#app>footer").text(message);
	}

	// creating a public function
	this.start = function()
	{
		$("#app>header").append(version);
		setStatus("ready");

		alert("Welcome to the Guessing Game.");

		
var num = parseInt(prompt("Player 1 enter a number: "));

		var tries = 0;

		do{
   
 			tries+=1;
    
			var num2 = parseInt(prompt("Player 2 enter a number: "));


   			 if(num2 > num){alert("That number was too high.");}
   
 			else if(num2 < num){alert("That number was too low.");}


		}while(num2 != num)

		alert("You guessed it! The number was "+ num);

		alert("It took "+tries+" tries to get it!");
	};


} // end MyApp

/* 	JQuery's shorthand for the document ready event handler
		could be written: $(document).ready(handler);

		When this page loads, we'll create a global variable
		named "app" by attaching it to the "window" object
		(part of the BOM - Browser Object Model)
*/
$(function() {
	window.app = new MyApp();
	window.app.start();
});
