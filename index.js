//Declaration et initialisation des variables
let resetBtn = document.getElementById("resetBtn");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let timerShow = document.getElementById("timerShow");

//ajoutons un son d'alarm au timer.
const monSon = new Audio("alarm.mp3");

//creation des fonction pour la fonctionnalite des btns
let countdown = 25 * 60 * 1000; //on converti 25mn en ms
let timer;
function start() {
	timer = setInterval(function () {
		countdown -= 1000;
		if (countdown <= 0) {
			clearInterval(timer);
			monSon.play();
			//timerShow.textContent = `25:00`;
			return;
		}

		updatTimer();
	}, 1000);
}

function updatTimer() {
	//convertisons la valeur de countdown en seconde et en minutes
	const minutes = Math.floor(countdown / (1000 * 60));
	const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

	timerShow.textContent = `${minutes}:${seconds}`;
}

//La fonction permettant d'arreté le timer
function stop() {
	clearInterval(timer);
}

//La fonction permettant de remettre le timer a valeur initiale qui est 25:00
function reset() {
	clearInterval(timer);
	timerShow.textContent = `25:00`;
}

//Creation de nos evenements
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
