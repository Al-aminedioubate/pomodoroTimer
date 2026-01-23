//Declaration et initialisation des variables
let resetBtn = document.getElementById("resetBtn");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let timerShow = document.getElementById("timerShow");

//ajoutons un son d'alarm au timer.
const monSon = new Audio("alarm.mp3");

//creation des fonction pour la fonctionnalite des btns
let countdown = 1500; // equivaut a 25 minutes en secondes
let timer;

function updatTimer() {
	//convertisons la valeur de countdown en seconde et en minutes
	let minutes = Math.floor(countdown / 60);
	let seconds = Math.floor(countdown % 60);

	timerShow.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
		.toString()
		.padStart(2, "0")}`;
}

function startTimer() {
	timer = setInterval(function () {
		countdown--;
		updatTimer();
		if (countdown === 0) {
			clearInterval(timer);
			countdown = 1500;
			monSon.play();
			updatTimer();
		}
	}, 1000);
}

//La fonction permettant d'arreté le timer
function stopTimer() {
	clearInterval(timer);
}

//La fonction permettant de remettre le timer a sa valeur initiale qui est 25:00
function resetTimer() {
	clearInterval(timer);
	countdown = 1500;
	updatTimer();
}

//Creation de nos evenements
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
