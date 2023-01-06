

let items = document.querySelectorAll(".item");
let queue = "player1";
let count = 0;
let winner = null;

for(let i=0; i<items.length;i++){
	items[i].onclick = function(){
		if(queue == "player1"){
			items[i].innerHTML = "X";
			queue = "player2";
			items[i].check = "X";
			count++;

		}else if(queue == "player2"){
			items[i].innerHTML = "O";
			queue = "player1";
			items[i].check = "O";
			count++;
		}


		if( (items[0].check == "X" && items[1].check == "X" && items[2].check == "X") || (items[3].check == "X" && items[4].check == "X" && items[5].check == "X") || (items[6].check == "X" && items[7].check == "X" && items[8].check == "X")  || (items[0].check == "X" && items[3].check == "X" && items[6].check == "X") || (items[1].check == "X" && items[4].check == "X" && items[7].check == "X") || (items[2].check == "X" && items[5].check == "X" && items[8].check == "X")  || (items[0].check == "X" && items[4].check== "X" && items[8].check == "X") || (items[2].check == "X" && items[4].check == "X" && items[6].check == "X")  ){
			setTimeout(finish, 1000, "Победил 1 игрок")	
			winner = "player1"
		}else if((items[0].check == "O" && items[1].check == "O" && items[2].check == "O") || (items[3].check == "O" && items[4].check == "O" && items[5].check == "O") || (items[6].check == "O" && items[7].check == "O" && items[8].check == "O")  || (items[0].check == "O" && items[3].check == "O" && items[6].check == "O") || (items[1].check == "O" && items[4].check == "O" && items[7].check == "O") || (items[2].check == "O" && items[5].check == "O" && items[8].check == "O")  || (items[0].check == "O" && items[4].check == "O" && items[8].check == "O") || (items[2].check == "O" && items[4].check == "O" && items[6].check == "O")){	
				setTimeout(finish, 1000, "Победил 2 игрок")
				winner = "player2"
		}

		if(count == 9 && winner == null){
			
			setTimeout(finish, 1000, "ничья")
		}
	}
}



function finish(arg){
	alert(arg)
}
