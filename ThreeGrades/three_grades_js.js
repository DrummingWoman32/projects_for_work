//javascript code for ThreeGrades

<script type="text/javascript">

//okay, so a function to get the grades and then calculate the average, up to
//the point of getting the letter grade

/*function get_grade()
{
	var input = document.getElementById("grade").value;
	document.write(input);
	return input;
}

function calculate_A(g1, g2, g3)
{
	var avg = (g1 + g2 + g3)/3;
	var letter_grade = avg;

	document.write(avg);
	return avg;
}*/

//function get_grades()

/*function getG1()
{
	var g1 = document.getElementById("g1").value;
	//g1 = parseInt(g1);
	//document.write(grade1);
	return g1;
}


function getG2()
{
	g2 = document.getElementById("g2").value;
	//g2 = parseInt(g2);
	//document.write(grade2);
	return g2;
}


function getG3()
{
	g3 = document.getElementById("g3").value;
	//g3 = parseInt(g3);
	//document.write(grade3);
	return g3;
}


function calculate_A(g1, g2, g3)
{

var a = (g1 + g2 + g3)/3;
document.getElementById("avg").value=avg;


}*/


function myAverage(){


	var a = document.getElementById('Grade1').value;
	    a = parseInt(a); 
	var b = document.getElementById('Grade2').value;
	    b = parseInt(b);
	var c = document.getElementById('Grade3').value;
	    c = parseInt(c);
	var d =(a+b+c)/3;
	    d = parseInt(d);

	document.getElementById('Average').value = d;
	
}

function myReset(){

document.getElementById('Grades').reset();

}









</script>