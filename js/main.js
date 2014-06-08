$(document).ready(function(){
	var p1 = window.prompt("First player's name", "P1");
	var p2 = window.prompt("Second player's name", "P2");
	var info="First player:<b>"+p1+"</b>, Second player:<b>"+p2+"</b>";
	$("#info").html(info);
	var flag=1;var player=p1;
	$("#current").html("Current turn:<b>"+player+"</b>");
	$("td").on('click',function(){
		var filled=$(this).attr('id');
		flag++;
		if(flag%2==0){
			player=p2;
			$("#"+filled).html("X");
		}
		else{
			player=p1;
			$("#"+filled).html("O");
		}
		$("#current").html("Current turn:<b>"+player+"</b>");
	});

});