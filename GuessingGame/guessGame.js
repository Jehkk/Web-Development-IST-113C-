var ok;
ok = true;
var num = 1;

function Game(){
	if(window.ok){
		window.num = document.getElementById("user").value;
		document.getElementById("response").innerHTML = num;
		var tries = 0;
		document.getElementById("response").innerHTML = "Player 2 Enter a number: ";
		ok = false;
	}
	else{
		var num2 = document.getElementById("user").value;	
		if(num2 > window.num){document.getElementById("response").innerHTML = "That number was too high."; tries+=1;}
		else if(num2 < window.num){document.getElementById("response").innerHTML = "That number was too low."; tries+=1;}
		else if (window.num == num2){ document.getElementById("response").innerHTML = "You guessed it! It took "+tries+" tries to get it!";} 

	}
}
