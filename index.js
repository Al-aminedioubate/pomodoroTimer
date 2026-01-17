//Declaration et initialisation des variables
let resetBtn = document.getElementById("resetBtn");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let timerShow = document.getElementById("timerShow");

//creation des fonction pour la fonctionnalite des btns
let countdown = 25 * 60 * 1000; //on converti 25mn en ms
let timer;
function start() {
	timer = setInterval(function () {
		countdown -= 1000;
		if (countdown <= 0) {
			clearInterval(timer);
			return;
		}

		const minutes = Math.floor(countdown / (1000 * 60));
		const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

		timerShow.textContent = `${minutes}:${seconds}`;
	}, 1000);
}

function stop() {
	clearInterval(timer);
}

function reset() {
	console.log("La fonction reset est bonne");
}

//Creation de nos evenements
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
