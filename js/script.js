//text change
function textChange(){
	document.getElementById('tc1').innerHTML = "Minhaz Faisal";
}

//show date
function showDate(){
	document.getElementById('sd1').innerHTML = Date();
}
//variable example
function dataRepeat(){
	var message = "Shikhbe shobai "
	document.getElementById('rm1').innerHTML = message.repeat(3);
}

//bulb on/off -->
function bulbOn(){
	document.getElementById('bulb').src = 'images/pic_bulbon.png'

}
function bulbOff(){
	document.getElementById('bulb').src = 'images/pic_bulboff.png'
	
}
// hide elements
function showText(){
	document.getElementById('se').style.display = 'block';
}