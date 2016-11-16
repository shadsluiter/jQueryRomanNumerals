$(document).ready(function(){

	$('button').click(function(){
		var toRoman = $('#txtNumber').val();
		$('#txtMessages').html(toRoman + ' in Roman numerals is '+ convertToRoman(toRoman));

		
	});


	function convertToRoman(x) {

		if (x < 0 || x > 10000) {
			return "Sorry I can't do that.";
		}

		// start with an empty string
		var RomanNumber = "";

		while (x >= 1000) {
			RomanNumber = RomanNumber + "M";
			x = x - 1000;
		}

		while ( x >= 900) {
			RomanNumber = RomanNumber + "CM";
			x = x - 900;
		}

		while ( x >= 500) {
			RomanNumber = RomanNumber + "D";
			x = x - 500;
		}

		while ( x >= 400) {
			RomanNumber = RomanNumber + "CD";
			x = x - 400;
		}

		while ( x >= 100) {
			RomanNumber = RomanNumber + "C";
			x = x - 100;
		}

		while ( x >= 90) {
			RomanNumber = RomanNumber + "XC";
			x = x - 90;
		}

		while ( x >= 50) {
			RomanNumber = RomanNumber + "L";
			x = x - 50;
		}
		while ( x >= 40) {
			RomanNumber = RomanNumber + "XL";
			x = x - 40;
		}

		while ( x >= 10) {
			RomanNumber = RomanNumber + "X";
			x = x - 10;
		}

		while ( x >= 9) {
			RomanNumber = RomanNumber + "IX";
			x = x - 9;
		}

		while ( x >= 5) {
			RomanNumber = RomanNumber + "V";
			x = x - 5;
		}

		while ( x >= 4) {
			RomanNumber = RomanNumber + "IV";
			x = x - 4;
		}

		while ( x >= 1) {
			RomanNumber = RomanNumber + "I";
			x = x - 1;
		}

		return RomanNumber;

	}

});