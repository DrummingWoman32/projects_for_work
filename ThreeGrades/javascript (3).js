function myAverage(){




	var a = document.getElementById('Grade1').value;
	    a = parseInt(a); 
	var b = document.getElementById('Grade2').value;
	    b = parseInt(b);
	var c = document.getElementById('Grade3').value;
	    c = parseInt(c);
	var d =(a+b+c)/3;

	document.getElementById('Average').value = d;

if (d < 59) {
document.getElementById ("lettergrade").text= F;
} 
if (d < 69) {
document.getElementById ("lettergrade").text= D;	
}
if (d < 79) {
document.getElementById ("lettergrade").text= C;
}
if (d < 89) {
document.getElementById ("lettergrade").text= B;
{
if (d < 100) {
document.getElementById ("lettergrade").text= A;
(else)

function myReset(){

document.getElementById('Grades').reset();

}