function TitleScreen(){
	$("button").click(function(){
		$("p").text("Red Player, Choose a question for Blue to answer.");
		document.getElementById("sbutton").style.visibility = "hidden";
		document.getElementById("qdiv").style.visibility = "visible";

		newQuestion('#question1');
		newQuestion('#question2');
		newQuestion('#question3');
		
	});
	
	
	
}

function RedTurn(question){
	

}

function newQuestion(dest){
    let request = new XMLHttpRequest();
    request.open('GET', 'http://jservice.io/api/random');  
    request.addEventListener('load', function(){
        console.log(request.responseText)
        let response = JSON.parse(request.responseText);
        let question = {
             category: response[0].category.title,
             value: response[0].value,
             quest: response[0].question,
             answer: response[0].answer,
         }
         console.log(question);
		 setQuestion(question,dest);
		 
    });                 
    request.send();     
}

function setQuestion(question, dest){
	$(dest).text(question.quest);
}



$(function() {
  window.app = new TitleScreen();
});