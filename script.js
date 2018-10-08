// write your JS code here
let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function onloadFunc() {
	for (let i=0; i<25; i++) {
		document.querySelector(`.keyboard-div`).innerHTML += `<div class='box key' id='a${i}' onclick='btn(${i})'>${alphabets[i]}</div>`;

	}
	for (let i=0; i<1; i++) {
		document.querySelector(`.keyboard-div`).innerHTML += `<div  class='ex key' id='a${i}'><span id='spac' onclick='space()'>Space</span></div>`;

	}
	for (let i=0; i<1; i++) {
		document.querySelector(`.keyboard-div`).innerHTML += `<div class='box key' id='a${i}'><i onclick='send()' class='fas fa-arrow-alt-circle-right'></i></div>`;

	}
}

function btn(i) {
	let val = document.querySelector(`#a${i}`).innerHTML;
	document.querySelector(`.text-area`).innerHTML += `${val}`;
}

let a = 25;
let spacee = " ";

function space(a) {
	document.querySelector(`.text-area`).innerHTML += `${spacee}`;
}

function send() {
	alert("Message Has been Send");
	document.querySelector(`.text-area`).innerHTML = ``;
} 
