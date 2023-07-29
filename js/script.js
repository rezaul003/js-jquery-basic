// js codes

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

// <!-- practice variable 1 -->


function outPut(){
	var n1 = 7;
	var n2 = 8;
	var result = n1+n2;

	document.getElementById('op').innerHTML = result;
}
// <!-- practice variable 2 -->
function outPutt(){
const a = 11;
const b = 14;
const c = a+b;
document.getElementById('opp').innerHTML = c;
}

// Js Data types
function showAns(){
	const pi = 3.14;
	let person = "Rezaul Karim";
	let answer = 'yes I am';

	document.getElementById('dt').innerHTML = pi + person + answer;
}

// Constant Arrays
function getResult(){
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");

document.getElementById("ca").innerHTML = cars; 
}

function theObj(){
	const car = {type:"Fiat", model:"500", color:"white"};

car.color = "red";
car.owner = "Avik Anwar";

document.getElementById("co").innerHTML = "Car owner is " + car.owner; 
}

// Arithmetic Operators Example
function getMath(){
	let a = 3;
let x = (100 + 50) * a;
document.getElementById("ao").innerHTML = x;
}
// Assignment Operator
function getOp(){
	var x = 10;
     x += 5;
document.getElementById("assop").innerHTML = x;
}

// JavaScript String Comparison
function getStr(){
	let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log('ooooo')
document.getElementById("sc").innerHTML = result;
	}

	// jQuery selectors
	$(document).ready(function() {
  var myElements = $("#id01");
  $("#demo").text("The text from the id01 paragraph is: " + myElements[0].innerHTML);
});




// jq codes
$(document).ready(function(){

	// alert
	$('.jq').on("click", function(){
		alert("Just practicing jquery")
	});

	// show
	$('#shw').on('click', function(){
		$('#shd').show();
	});
	// hide
			$('#hid').on('click', function(){
		$('#shd').hide();
	});
		$('#tgl').on('click', function(){
		$('#shd').toggle();
	});



			// fade
	$('#fdi').on('click', function(){
		$('#fd').fadeIn();
	});
	// hide
			$('#fdo').on('click', function(){
		$('#fd').fadeOut();
	});
		$('#tglfd').on('click', function(){
		$('#fd').fadeToggle(2000);
	});

}) ; 

// Question/Answer
$(document).ready(function(){
	
	$('.ques').on('click', function(){
		$('.ans').slideToggle(1000);
	});
});