let currentFrq

function start(){
	currentFrq = 440;
	const audioContext = new AudioContext();
	var oscillatorNode = new OscillatorNode(audioContext, sine, currentFrq)


}