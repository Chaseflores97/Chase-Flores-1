console.log('Hi chache');


const updateRows = function(){
let htmlRows = '';
const savedStrings = JSON.parse(localStorage.getItem('contactObj'));

for (let i = 0; i < savedStrings.length; i++) {

  
    htmlRows += '<tr>';
    htmlRows += '<td><a href ="../view/?id=' + i + '">' + savedStrings[i].firstN + '</a></td>';
    htmlRows += '<td>' + savedStrings[i].lastName + '</td>';
    htmlRows += '<td>' + savedStrings[i].emailInfo + '</td>';
    htmlRows += '<td>' + savedStrings[i].phoneInfo + '</td>';
    htmlRows += '</tr>';



}


document.getElementById('contactInfo').innerHTML = htmlRows;



};

updateRows();

