function newgame(){

	var p1 = window.prompt("First player's name", "P1");
	var p2 = window.prompt("Second player's name", "P2");
	if(p1==null)
		p1="Player1";
	if(p2==null)
		p2="Player2";
	var info="First player:<b>"+p1+"</b>, Second player:<b>"+p2+"</b>";
	$("#info").html(info);
	var flag=1;var player=p1;var win_flag=0;
	$("#current").html("Current turn:<b>"+player+"</b>");
	$("td").on('click',function(){
		var filled=$(this).attr('id');
		if(flag<9){
		if(flag%2==0){
			player=p1;
			if($("#"+filled).html()==""){
				$("#"+filled).html("X");
				if(filled=="r1c1"){
					if($("#r2c1").html()=="X" && $("#r3c1").html()=="X"){
						$("#r2c1").css('color','green');
						$("#r1c1").css('color','green');
						$("#r3c1").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r1c2").html()=="X" && $("#r1c3").html()=="X"){
						$("#r1c2").css('color','green');
						$("#r1c1").css('color','green');
						$("#r1c3").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="X" && $("#r3c3").html()=="X"){
						$("#r2c2").css('color','green');
						$("#r1c1").css('color','green');
						$("#r3c3").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r3c1"){
					if($("#r1c1").html()=="X" && $("#r2c1").html()=="X"){
						$("#r2c1").css('color','green');
						$("#r1c1").css('color','green');
						$("#r3c1").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r3c2").html()=="X" && $("#r3c3").html()=="X"){
						$("#r3c2").css('color','green');
						$("#r3c1").css('color','green');
						$("#r3c3").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="X" && $("#r1c3").html()=="X"){
						$("#r2c2").css('color','green');
						$("#r1c3").css('color','green');
						$("#r3c1").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r2c1"){
					if($("#r1c1").html()=="X" && $("#r3c1").html()=="X"){
						$("#r2c1").css('color','green');
						$("#r1c1").css('color','green');
						$("#r3c1").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="X" && $("#r2c3").html()=="X"){
						$("#r2c1").css('color','green');
						$("#r2c2").css('color','green');
						$("#r2c3").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r1c2"){
					if($("#r1c1").html()=="X" && $("#r1c3").html()=="X"){
						$("#r1c2").css('color','green');
						$("#r1c1").css('color','green');
						$("#r1c3").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="X" && $("#r3c2").html()=="X"){
						$("#r1c2").css('color','green');
						$("#r2c2").css('color','green');
						$("#r3c2").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r3c2"){
					if($("#r3c1").html()=="X" && $("#r3c3").html()=="X"){
						$("#r3c2").css('color','green');
						$("#r3c3").css('color','green');
						$("#r3c1").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="X" && $("#r1c2").html()=="X"){
						$("#r1c2").css('color','green');
						$("#r2c2").css('color','green');
						$("#r3c2").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r2c2"){
					if($("#r1c1").html()=="X" && $("#r3c3").html()=="X"){
						$("#r2c2").css('color','green');
						$("#r3c3").css('color','green');
						$("#r1c1").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r3c1").html()=="X" && $("#r1c3").html()=="X"){
						$("#r1c3").css('color','green');
						$("#r2c2").css('color','green');
						$("#r3c1").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r2c1").html()=="X" && $("#r2c3").html()=="X"){
						$("#r2c3").css('color','green');
						$("#r2c2").css('color','green');
						$("#r2c1").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r1c2").html()=="X" && $("#r3c2").html()=="X"){
						$("#r1c2").css('color','green');
						$("#r2c2").css('color','green');
						$("#r3c2").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r1c3"){
					if($("#r1c1").html()=="X" && $("#r1c2").html()=="X"){
						$("#r1c3").css('color','green');
						$("#r1c1").css('color','green');
						$("#r1c2").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="X" && $("#r3c1").html()=="X"){
						$("#r2c2").css('color','green');
						$("#r1c3").css('color','green');
						$("#r3c1").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r2c3").html()=="X" && $("#r3c3").html()=="X"){
						$("#r2c3").css('color','green');
						$("#r1c3").css('color','green');
						$("#r3c3").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r2c3"){
					if($("#r2c1").html()=="X" && $("#r2c2").html()=="X"){
						$("#r2c1").css('color','green');
						$("#r2c3").css('color','green');
						$("#r2c2").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r1c3").html()=="X" && $("#r3c3").html()=="X"){
						$("#r2c3").css('color','green');
						$("#r1c3").css('color','green');
						$("#r3c3").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r3c3"){
					if($("#r1c1").html()=="X" && $("#r2c2").html()=="X"){
						$("#r2c2").css('color','green');
						$("#r1c1").css('color','green');
						$("#r3c3").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r3c2").html()=="X" && $("#r3c1").html()=="X"){
						$("#r3c2").css('color','green');
						$("#r3c1").css('color','green');
						$("#r3c3").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}
					if($("#r2c3").html()=="X" && $("#r1c3").html()=="X"){
						$("#r2c3").css('color','green');
						$("#r1c3").css('color','green');
						$("#r3c3").css('color','green');
						alert(p2+", won the game");
						win_flag=1;
					}

				}

				if(win_flag==0){
					flag++;	
				}
				else if(win_flag==1){
					location.reload();
				}
				
			}
			else{
				console.log("sorry you can't");
			}
			
		}
		else{
			player=p2;
			if($("#"+filled).html()==""){
				$("#"+filled).html("O");
				if(filled=="r1c1"){
					if($("#r2c1").html()=="O" && $("#r3c1").html()=="O"){
						$("#r2c1").css('color','green');
						$("#r1c1").css('color','green');
						$("#r3c1").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r1c2").html()=="O" && $("#r1c3").html()=="O"){
						$("#r1c2").css('color','green');
						$("#r1c1").css('color','green');
						$("#r1c3").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="O" && $("#r3c3").html()=="O"){
						$("#r2c2").css('color','green');
						$("#r1c1").css('color','green');
						$("#r3c3").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r3c1"){
					if($("#r1c1").html()=="O" && $("#r2c1").html()=="O"){
						$("#r2c1").css('color','green');
						$("#r1c1").css('color','green');
						$("#r3c1").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r3c2").html()=="O" && $("#r3c3").html()=="O"){
						$("#r3c2").css('color','green');
						$("#r3c1").css('color','green');
						$("#r3c3").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="O" && $("#r1c3").html()=="O"){
						$("#r2c2").css('color','green');
						$("#r1c3").css('color','green');
						$("#r3c1").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r2c1"){
					if($("#r1c1").html()=="O" && $("#r3c1").html()=="O"){
						$("#r2c1").css('color','green');
						$("#r1c1").css('color','green');
						$("#r3c1").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="O" && $("#r2c3").html()=="O"){
						$("#r2c1").css('color','green');
						$("#r2c2").css('color','green');
						$("#r2c3").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r1c2"){
					if($("#r1c1").html()=="O" && $("#r1c3").html()=="O"){
						$("#r1c2").css('color','green');
						$("#r1c1").css('color','green');
						$("#r1c3").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="O" && $("#r3c2").html()=="O"){
						$("#r1c2").css('color','green');
						$("#r2c2").css('color','green');
						$("#r3c2").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r3c2"){
					if($("#r3c1").html()=="O" && $("#r3c3").html()=="O"){
						$("#r3c2").css('color','green');
						$("#r3c3").css('color','green');
						$("#r3c1").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="O" && $("#r1c2").html()=="O"){
						$("#r1c2").css('color','green');
						$("#r2c2").css('color','green');
						$("#r3c2").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r2c2"){
					if($("#r1c1").html()=="O" && $("#r3c3").html()=="O"){
						$("#r2c2").css('color','green');
						$("#r3c3").css('color','green');
						$("#r1c1").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r3c1").html()=="O" && $("#r1c3").html()=="O"){
						$("#r1c3").css('color','green');
						$("#r2c2").css('color','green');
						$("#r3c1").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r2c1").html()=="O" && $("#r2c3").html()=="O"){
						$("#r2c3").css('color','green');
						$("#r2c2").css('color','green');
						$("#r2c1").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r1c2").html()=="O" && $("#r3c2").html()=="O"){
						$("#r1c2").css('color','green');
						$("#r2c2").css('color','green');
						$("#r3c2").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r1c3"){
					if($("#r1c1").html()=="O" && $("#r1c2").html()=="O"){
						$("#r1c3").css('color','green');
						$("#r1c1").css('color','green');
						$("#r1c2").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r2c2").html()=="O" && $("#r3c1").html()=="O"){
						$("#r2c2").css('color','green');
						$("#r1c3").css('color','green');
						$("#r3c1").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r2c3").html()=="O" && $("#r3c3").html()=="O"){
						$("#r2c3").css('color','green');
						$("#r1c3").css('color','green');
						$("#r3c3").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r2c3"){
					if($("#r2c1").html()=="O" && $("#r2c2").html()=="O"){
						$("#r2c1").css('color','green');
						$("#r2c3").css('color','green');
						$("#r2c2").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r1c3").html()=="O" && $("#r3c3").html()=="O"){
						$("#r2c3").css('color','green');
						$("#r1c3").css('color','green');
						$("#r3c3").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}

				}
				if(filled=="r3c3"){
					if($("#r1c1").html()=="O" && $("#r2c2").html()=="O"){
						$("#r2c2").css('color','green');
						$("#r1c1").css('color','green');
						$("#r3c3").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r3c2").html()=="O" && $("#r3c1").html()=="O"){
						$("#r3c2").css('color','green');
						$("#r3c1").css('color','green');
						$("#r3c3").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}
					if($("#r2c3").html()=="O" && $("#r1c3").html()=="O"){
						$("#r2c3").css('color','green');
						$("#r1c3").css('color','green');
						$("#r3c3").css('color','green');
						alert(p1+", won the game");
						win_flag=1;
					}

				}
				if(win_flag==0){
					flag++;	
				}
				else if(win_flag==1){
					location.reload();
				}
			}
			else{
				console.log("sorry you can't");
			}
		}
		
		$("#current").html("Current turn:<b>"+player+"</b>");
		console.log(flag);
		
		}

		else{
			$("#"+filled).html("O");
			alert("It was a draw, game over");
			location.reload();
		}
		
	});
	
}
$(document).ready(function(){
	newgame();

});
