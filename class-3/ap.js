
var userInput = prompt('Enter Your Name?');	
var engMarks = +prompt('Enter English Obtained Marks?');
var urdMarks = +prompt('Enter Urdu Obtained Marks?');
var pstMarks = +prompt('Enter Pak-Studies Obtained Marks?');
var comMarks = +prompt('Enter Computer Obtained Marks?');
var bioMarks = +prompt('Enter Biology Obtained Marks?');

var totalSum =	500;
var obtnMrk = 	engMarks+urdMarks+pstMarks+comMarks+bioMarks; 
var totalPercentage = (obtnMrk / totalSum) * 100;



	document.write('<br>'  + ' Name			        ==  '+ userInput + '<br>' + '<br>');
	document.write('<br>'  + ' English 		        ==  '+ engMarks  +' /-'+ '<br>'  + '<br>');
	document.write('<br>'  + ' Urdu 			    ==  '+ urdMarks  +' /-'+ '<br>'  + '<br>');
	document.write('<br>'  + ' Pakistan Studies 	==  '+ pstMarks  +' /-'+ '<br>'  + '<br>');
	document.write('<br>'  + ' Computer 		    ==  '+ comMarks  +' /-'+ '<br>'  + '<br>');
	document.write('<br>'  + ' Biology 		        ==  '+ bioMarks  +' /-'+ '<br>'  + '<br>');
	document.write('<br>'  + ' Total Marks 		    ==  '+ totalSum  +' /-'+ '<br>'  + '<br>');
	document.write('<br>'  + ' Obtained Marks 	    ==  '+ obtnMrk   +' /-'+  '<br>'   + '<br>');
	document.write('<br>'  + ' Total Percentage     ==  '+totalPercentage+'%'  + '<br>' + '<br>');	



	if (totalPercentage >=80 && totalPercentage <=101){
	document.write('<h1>'+'Grade = A+'+'</h1>')
	}
	
	else if (totalPercentage >=70 && totalPercentage <=80){
	document.write('<h1>'+'Grade = A'+'</h1>')
	}
	
	else if (totalPercentage >=60 && totalPercentage <=69){
	document.write('<h1>'+'Grade = B'+'</h1>')
	}
	
	else if (totalPercentage >=50 && totalPercentage <=59){
	document.write('<h1>'+'Grade = C'+'</h1>')
	}
	
	else if (totalPercentage >=45 && totalPercentage <=49){
	document.write('<h1>'+'Grade = D'+'</h1>')
	}
	
	else{document.write('<h1>'+'Failed'+'</h1>')}
	

























// var email = 'Asad'
// var Pasword = 'Asad'

// if(email == Pasword){
//     document.write("Yeh Sahi Hai Boss")
// }
// else{
//     document.write('Yeh Ghalat Hai Babu G')
// }


// var email = 'Asad'
// var Pasword = 'sad'

// if(email == Pasword){
//     document.write("Yeh Sahi Hai Boss")
// }
// else{
//     document.write('Yeh Ghalat Hai Babu G')
// }





// var email = prompt('Enter Name?')
// var Pasword = prompt('Enter Password?')

// if(email == Pasword){
//     document.write("Yeh Sahi Hai Boss!")
// }
// else{
//     document.write('Yeh Ghalat Hai Babu G!')
// }