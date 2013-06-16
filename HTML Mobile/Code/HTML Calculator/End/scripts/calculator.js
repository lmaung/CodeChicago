var operand;		// This is to hold the operand for the application 
					// 1: Addition 
					// 2: Subtraction
					// 3: Multiplication
					// 4: Division
var globalVar1;		// Global variable to hold the first value
var globalVar2;		// Global variable to hold the second value

function btnClear(){
	// Grab the object that holds the display and set the value to 0
	var tempDisplay = document.getElementById('txtResult');
	tempDisplay.innerHTML = "0";
}

function btnNumbers(e){
	// Grab the object's inner html (string value). If it is 0, set to value of button pressed.
	// If the string value of the display is anything else append the value of button 
	// NOTE: we are using strings so we can append to values easier than to use int or float values.
	var tempDisplay = document.getElementById('txtResult').innerHTML;
	if (tempDisplay == "0")
	{
		tempDisplay = e.toString();
	}
	else
	{
		tempDisplay = tempDisplay + e.toString();
	}
	
	document.getElementById('txtResult').innerHTML = tempDisplay;
}


function btnDec(){
	// In the case of Decimal, we can only one one so we will search for the "." in the string value of the
	// display and if it exists, we'll leave it alone. if not, we'll add the "." and then display it back.
	var tempDisplay = document.getElementById('txtResult').innerHTML;
	if (tempDisplay.indexOf(".") == -1)
	{
		tempDisplay = tempDisplay + ".";
	}
	document.getElementById('txtResult').innerHTML = tempDisplay;
}

function btnPM(){
	// This is simple. We are going to get the string value of  the display. Using parseFloat convert it to 
	// a float (not int in case of dec. values) then multiply it with -1 to get the - or + value as needed.
	var tempDisplay = document.getElementById('txtResult').innerHTML;
	var tempDisplayNumber = parseFloat(tempDisplay);
	tempDisplayNumber = tempDisplayNumber * -1;
	document.getElementById('txtResult').innerHTML = tempDisplayNumber.toString();
}


function btnOperate(e){
	// When a operation button is pressed, we'll collect the button type (see above) and then set the current
	// value to global variable 1. Then set the display to 0.
	globalVar1 = document.getElementById('txtResult').innerHTML;
	operand = e;
	document.getElementById('txtResult').innerHTML = "0";
}

function btnPercent(){
	// Logic is fairly simple.
	var tempDisplay = document.getElementById('txtResult').innerHTML;
	var PercentNumber = parseFloat(tempDisplay);

	// Calculate the percentage value in decimal.
	PercentNumber = PercentNumber/100;	

	// If we are adding or subtracting, we need to calulate the percentage and multiply that percentage to the
	// global variable so that we have the percent of the initial value (which we leave on the screen). 
	// If the user pressed + or -, btnEqual's logic will be evaluated.
	if ((operand == 1) || (operand == 2))
	{
		document.getElementById('txtResult').innerHTML = (PercentNumber).toString();
		if (globalVar1 != "")
		{
			document.getElementById('txtResult').innerHTML = (globalVar1 * PercentNumber).toString();
		}
	}
	else 
	// If we are not adding or subtracting, we are just going to leave the percentage value on the screen so that
	// if the user pressed x or ÷ sign, we will just display the percentage back so that only the multiply or division
	// logic will evaluate
	{
		document.getElementById('txtResult').innerHTML = (PercentNumber).toString();
	}
}


function btnEqual(){
	// Collect the current value of number on the screen and using the switch/case statement
	// operate the equation as needed.
	// NOTE: we have to reset the values back to how we found them initially in case somone
	// keep pressing the = sign over and over again.
	globalVar2 = document.getElementById('txtResult').innerHTML;
	var G1Number = parseFloat(globalVar1);
	var G2Number = parseFloat(globalVar2);

	switch(operand)
	{
	case 1:
	  document.getElementById('txtResult').innerHTML = (G1Number + G2Number).toString();
	  break;
	case 2:
	  document.getElementById('txtResult').innerHTML = (G1Number - G2Number).toString();
	  break;
	case 3:
	  document.getElementById('txtResult').innerHTML = (G1Number * G2Number).toString();
	  break;
    case 4:

	  document.getElementById('txtResult').innerHTML = (G1Number / G2Number).toString();
	  break;
	default:
	  document.getElementById('txtResult').innerHTML = "0";
	}
	operand = 0;
	globalVar1 = "";
	globalVar2 = "";
}