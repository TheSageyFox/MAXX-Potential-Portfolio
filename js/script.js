let modal = document.getElementById('project-modal');
let frame = document.getElementById('content');
let urls = [
			'https://thesageyfox.github.io/moonraven-rabbitry/',
			'https://thesageyfox.github.io/memory-game/',
			'https://thesageyfox.github.io/fend-frogger/',
			'https://thesageyfox.github.io/st-johns/'
			]


function openModal(url){
	modal.style.display="block";
	frame.innerHTML='<iframe src="'+ url + '"></iframe>';

}

function closeModal(){
	modal.style.display="none";
}

function test(){
	window.open('https://thesageyfox.github.io/moonraven-rabbitry');
}