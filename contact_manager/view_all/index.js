console.log('Hi chache');

let htmlRows = '';
const savedStrings = JSON.parse(localStorage.getItem('contactObj'));

for (let i = 0; i < savedStrings.length; i++) {

  
    htmlRows += '<tr>';
    htmlRows += '<td><a href ="../view/?id=' + i + '">' + savedStrings[i].firstN + '</a></td>';
    htmlRows += '<td><a href ="../view/?id=' + i + '">' + savedStrings[i].lastName + '</a></td>';
    htmlRows += '<td><a href ="../view/?id=' + i + '">' + savedStrings[i].emailInfo + '</a></td>';
    htmlRows += '<td><a href ="../view/?id=' + i + '">' + savedStrings[i].phoneInfo + '</a></td>';
    htmlRows += '</tr>';



};
document.getElementById('contactInfo').innerHTML = htmlRows;