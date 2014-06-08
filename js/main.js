$(document).ready(function(){
	var p1 = window.prompt("First player's name", "P1");
	var p2 = window.prompt("Second player's name", "P2");
	var info="First player:<b>"+p1+"</b>, Second player:<b>"+p2+"</b>";
	$("#info").html(info);
	var flag=1;var player=p1;
	$("#current").html("Current turn:<b>"+player+"</b>");
	$("td").on('click',function(){
		var filled=$(this).attr('id');
		if(flag%2==0){
			player=p1;
			if($("#"+filled).html()==""){
				$("#"+filled).html("X");
				flag++;
			}
			else{
				console.log("sorry you can't");
			}
			
		}
		else{
			player=p2;
			if($("#"+filled).html()==""){
				$("#"+filled).html("O");
				flag++;
			}
			else{
				console.log("sorry you can't");
			}
		}
		
		$("#current").html("Current turn:<b>"+player+"</b>");
		
	});

});