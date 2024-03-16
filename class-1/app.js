

var num1 = +prompt('Enter value 1')
var num2 = +prompt('Enter value 2')

var add = num1 + num2
var sub = num1 - num2
var mul = num1 * num2
var dvd = num1 / num2
// var add = num1 + num2

// ADDITION

document.write(
'<table border=1>'+
'<tr>'+
'<th>'+'<h1>ADDITION</h1>'+'</th>'
+'</tr>'+
'<tr>'+
'<td>'+add+'</td>'
+'</tr>'
+'</table>'
)

// Subtraction
document.write('<table border=1>'+
'<tr>'+
'<th>'+'<h1>SUBTRACT</h1>'+'</th>'
+'</tr>'+
'<tr>'+
'<td>'+sub+'</td>'
+'</tr>'
+'</table>'
)

// Mutliplication
document.write(
'<table border=1>'+
'<tr>'+
'<th>'+
'<h1>MULTIPLY</h1>'
+'</th>'+
'</tr>'+

'<tr>'+
'<td>'+
mul
+'</td>'
+'</tr>'+
'</table>'    
)


// Divided
document.write(
    '<table border=1>'+
    '<tr>'+
    '<th>'+
    '<h1>Divided</h1>'
    +'</th>'+
    '</tr>'+
    
    '<tr>'+
    '<td>'+
    dvd
    +'</td>'
    +'</tr>'+
    '</table>'    
    )
    