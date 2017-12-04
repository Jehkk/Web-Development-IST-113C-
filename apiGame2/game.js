var answer1;
var answer2;
var answer3;
var score;
var turn;

function TitleScreen(){
	$("#sbutton").unbind().click(function(){
		$("p").text("Red Player, Choose a question for Blue to answer.");
		document.getElementById("sbutton").style.visibility = "hidden";
		document.getElementById("qdiv").style.visibility = "visible";
		score = 3;
		window.turn = true;
		Choose();
	});	
}

function Choose(){
	for(i=0;i<3; i++){ newQuestion(i); }
	
	if(turn == true){
		$("#question1").unbind().click(function(){
			$("p").text("Blue player, " + document.getElementById('question1').textContent);
			document.getElementById('qdiv').style.visibility = "hidden";
			Answer(answer1);
		});	
		$("#question2").unbind().click(function(){
			$("p").text("Blue player, " + document.getElementById('question2').textContent);
			document.getElementById('qdiv').style.visibility = "hidden";
			Answer(answer2);
		});	
		$("#question3").unbind().click(function(){
			$("p").text("Blue player, " + document.getElementById('question3').textContent);
			document.getElementById('qdiv').style.visibility = "hidden";
			Answer(answer3);
		});	
	}
	else{
		$("#question1").unbind().click(function(){
			$("p").text("Red player, " + document.getElementById('question1').textContent);
			document.getElementById('qdiv').style.visibility = "hidden";
			Answer(answer1);
		});	
		$("#question2").unbind().click(function(){
			$("p").text("Red player, " + document.getElementById('question2').textContent);
			document.getElementById('qdiv').style.visibility = "hidden";
			Answer(answer2);
		});	
		$("#question3").unbind().click(function(){
			$("p").text("Red player, " + document.getElementById('question3').textContent);
			document.getElementById('qdiv').style.visibility = "hidden";
			Answer(answer3);
		});	
	}
	
	
}

function Answer(a){
	document.getElementById('adiv').style.visibility = "visible";
	console.log(a);
	$("#subm").unbind().click(function(){
		var inp = $('#box').val();
		if(turn == true){
			if(inp == a){window.score -= 1; }
			else{ window.score += 1;};
			$("p").text("Blue Player, Choose a question for Red to answer.");
			window.turn = false;
		}
		else{
			if(inp == a){window.score += 1; }
			else{ window.score -= 1;};
			$("p").text("Red Player, Choose a question for Blue to answer.");
			window.turn = true;
		}
		$('body').css('background-image','url(images/'+score+'.jpg)');
		document.getElementById("qdiv").style.visibility = "visible";
		document.getElementById("adiv").style.visibility = "hidden";
		if(window.score == 6){GameOver(true);}
		else if(window.score == 0){GameOver(false);}
		Choose();
		
	});	
	
}

function newQuestion(num){
    let request = new XMLHttpRequest();
    request.open('GET', 'http://jservice.io/api/random');  
    request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);
        let question = {
			 category: response[0].category.title,
             quest: response[0].question,
             answer: response[0].answer,
         }
		 if(num == 0){
			 $('#question1').text("Category: "+question.category+". Question: " + question.quest);
			 window.answer1 = question.answer;
		 }
		 else if (num == 1){
			 $('#question2').text("Category: "+question.category+". Question: " + question.quest);
			 window.answer2 = question.answer;
		 }
		 else if (num == 2){
			 $('#question3').text("Category: "+question.category+". Question: " + question.quest);
			 window.answer3 = question.answer;
		 }
    });                 
    request.send();    
}

function GameOver(win){
	document.getElementById("qdiv").style.visibility = "hidden";
	document.getElementById("adiv").style.visibility = "hidden";
	if(win == true){
		$("p").text("Red Player Wins!");
	}
	else{ $("p").text("Blue Player Wins!"); }
	
	document.getElementById("pagain").style.visibility = "visible";
	$("#pagain").unbind().click(function(){
			$("p").text("Red Player, Choose a question for Blue to answer.");
			window.score = 3;
			window.turn = true;
			document.getElementById("qdiv").style.visibility = "visible";
		    document.getElementById("adiv").style.visibility = "hidden";
			$('body').css('background-image','url(images/'+score+'.jpg)');
			document.getElementById("pagain").style.visibility = "hidden";
			Choose();
		});	
}


$(function() {
  window.app = new TitleScreen();
});