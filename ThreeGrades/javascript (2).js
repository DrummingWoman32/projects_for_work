function myAverage(){


	var a = document.getElementById('Grade1').value;
	    a = parseInt(a); 
	var b = document.getElementById('Grade2').value;
	    b = parseInt(b);
	var c = document.getElementById('Grade3').value;
	    c = parseInt(c);
	var d =(a+b+c)/3;

	document.getElementById('Average').value = d;
	
}

function myReset(){

document.getElementById('Grades').reset();

}