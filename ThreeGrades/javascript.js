function myAverage(){


	var a = document.getElementById('Grade1').value;
	    a = parseInt(a); 
	var b = document.getElementById('Grade2').value;
	    b = parseInt(b);
	var c = document.getElementById('Grade3').value;
	    c = parseInt(c);
	var d = (a+b+c)/3;
	
	var adjAvg = d.toFixed(2)  //here I'm adjusting the average to 2 decimal places				   

	document.getElementById('Average').value = adjAvg;
	//document.write(adjAvg);

	function convertLetterGrade(a)
	{

		//we convert the average to the appropriate letter grade

		if((a >= 90) && (a <= 100)){

			document.getElementById("Final_Grade").innerHTML = "A <br /> 			Congratulations!";

		}else if((a <= 89) && (a >= 80)) {

			document.getElementById("Final_Grade").innerHTML = "B <br /> Good 			job!";

		}else if((a <= 79) && (a >= 70)){

			document.getElementById("Final_Grade").innerHTML = "C <br /> You 			survived...but keep studying!";

		}else if((a <= 69) && (a >= 60)){

			document.getElementById("Final_Grade").innerHTML = "D <br /> Ouch. 			Study harder next time.";

		}else if((a <= 59) && (a >= 0)){

			document.getElementById("Final_Grade").innerHTML = "F <br /> Ouch. 			Study harder next time.";
		}else{

			document.getElementById("Final_Grade").innerHTML = "Unknown grade 			<br />";
		}

        }


	convertLetterGrade(adjAvg);

	
}

	


function myReset(){

document.getElementById('Grades').reset();
document.getElementById('Final_Grade').innerHTML = "";

}

