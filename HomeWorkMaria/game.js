let machineChoise = ["Rock", "Scissors", "Paper"];
let rndMachineChoise = Math.floor(Math.random() * machineChoise.length);
let computerChoise = machineChoise[rndMachineChoise];
let userChoise = prompt("Rock, Scissors or Paper?, ");

let result = function(computerChoise, userChoise){
	if(computerChoise===userChoise){
		return alert("Draw");
	}
	else if(userChoise==="Rock"){
		if(computerChoise==="Scissors"){
			return alert("You win!");
		}
		else{
			return alert("You lost! The winner is Paper!");
		}
	}
	else if(userChoise==="Paper"){
		if(computerChoise==="Rock"){
			return alert("You win!");
		}
		else{
			return alert("You lost! The winner is Scissors!");
		}
	}
	else if(userChoise==="Scissors"){
		if(computerChoise==="Paper"){
			return alert("You win!");
		}
		else{
			return alert("You lost! The winner is Rock!");
		}
	}
}
result(computerChoise, userChoise);