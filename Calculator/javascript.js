//javascript file for calculator

//<script type="text/javascript"></script>

//var a, b;

/*function display_number()
{
	//whatever number the user clicks displays on the calculator screen

	//document.write(document.getElementById("7").value);
	//document.getElementById("7").querySelector;

	
	document.calculator.ans.value+='7';
}*/

/*function add(a, b)         //addition
{
	//I need to be able to add as many numbers as the user wants...

	var sum = a + b;
	document.write(sum);
	return sum;
}

function subtract(a, b)           //subtraction
{
	var difference = a - b;
	document.write(difference);
	return difference;
}*/

/*function multiply(a, b)         //multiplication
{
	//i've got to be able to multiply as many numbers as the user wants...

	var product = a * b;
	document.write(product);
	return product;
}

function divide(a, b)           //division
{
	var quotient = a/b;
	document.write(quotient);
	return product;
}*/

//so above I've got the four basic math functions


//memory clear, or mc, to clear calculator memory

/*function clear()
{
	//I might just set the document to an empty string...
	//but I'll check the javascript tutorial just in case

	document.write("");
	return("");

	//I'll need to come back to this later...
}*/


//positive and negative numbers are needed, as both are legal

//var result; //document.getElementById("screen").value;

/*function change_sign(result)
{
	/*if(result > 0)
	{
		result = -result;
		document.calculator.ans.value+='-';
		//document.calculator.ans.value[0] = '-'
		//document.calculator.ans.value+='-';   //to make negative
		//return -a;
	}

	if(result < 0)
	{
		result = -result;
		document.calculator.ans.value+=' ';
		//document.calculator.ans.value[0] = '';
		//document.calculator.ans.value+=' ';   //to make positive
		//return -a;
	}*/

	/*if(('#screen').val() == '') return;
	result = eval('#screen').val() + '*-1';*/
	

	/*result = (-1)*result;
	result = result.toString();*/

	/*if(result.indexOf("-") == 0)
	{
		result = result.substring(1);
	}

	else
	{
		result = "-" + result;
	}

	document.calculator.ans.value = result;

}*/


var a = document.getElementById("screen1"); //this is to actually get the element so that
						//I can utilize it

function sqrt(a)
{
	//document.calculator.ans.value = -1*result;
	//document.calculator.ans.value = Math.sqrt(a);
	
	//a.value = Math.sqrt(a.value);
	a = parseInt(a);
	return Math.sqrt(a);
}



function percentage(a)
{
	//apply the % sign to the number. The calculator does that, but I probably need
	//to get it to actually work with the % sign. If I type 4 * 50%, I'm supposed to get 2, for example

	//what if i get the eval thing to work and then i calculate the percentage?
	//or I let the user say 4 * 50 and then I convert the result to a percentage?
	//because the problem is a gets the first number of document.calculater.ans, rather than the entire input
	
	//a+='%';

	//eval(a);

	a = parseInt(a);
	//return a/100;

	if(a < 0 || a > 10000)		//I can't have negative percentages
	{
		a.value = 'undefined';
	
		//document.write("NaN");

		//a.value = "NaN";
	}

	else
	{

		return (a*0.01); //I'm starting to think at this rate it'll be easier just to do this. 

		//if the user wants to find out something like 4*50%, he/she would need to do that, get 200, and then press the % button to find out that
		//50% of 4 is 2. I've got to move on to the scramble code...
	}

	
	
}
































