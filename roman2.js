$('document').ready(function(){


    $('#btnConvert').click(function(){
        var toConvert = $('#txtNumber').val();
        $('#txtMessages').html(toConvert + " in Roman numerals is " + getNumeral(toConvert));
        
    });


function getNumeral(input) {


        if (input < 0 || input > 10000) {
            return "Sorry.  I can't do that";
        }

        var returnValue = "";

        while (input >= 1000) {
            returnValue += "M";
            input -= 1000;
        }

        while (input >= 900) {
            returnValue += "CM";
            input -= 900;
        }
        while (input >= 500) {
            returnValue += "D";
            input -= 500;
        }
        while (input >= 400) {
            returnValue += "CD";
            input -= 400;
        }
        while (input >= 100) {
            returnValue += "C";
            input -= 100;
        }
        while (input >= 90) {
            returnValue += "XC";
            input -= 90;
        }
        while (input >= 50) {
            returnValue += "L";
            input -= 50;
        }
        while (input >= 40) {
            returnValue += "XL";
            input -= 40;
        }
        while (input >= 10) {
            returnValue += "X";
            input -= 10;
        }
        while (input >= 9) {
            returnValue += "IX";
            input -= 9;
        }
        while (input >= 5) {
            returnValue += "V";
            input -= 5;
        }
        while (input >= 4) {
            returnValue += "IV";
            input -= 4;
        }
        while (input >= 1) {
            returnValue += "I";
            input -= 1;
        }

        return returnValue;
    };


  });


