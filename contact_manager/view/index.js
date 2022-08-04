

const queryString = window.location.search; 
console.log(queryString);


const urlParams = new URLSearchParams(queryString); 

const product = urlParams.get('view')
console.log(view); 



















/*let htmlRows = '';

const savedStrings = JSON.parse(localStorage.getItem('contactObj'));

for (let i = 0; i < savedStrings[i]; i++) {





    '<a href = "../view/?id=' + i + '" > ' + savedStrings[i].firstN + ' < /a>';
    '<a href = "../view/?id=' + i + '" > ' + savedStrings[i].lastName + ' < /a>';
    '<a href = "../view/?id=' + i + '" > ' + savedStrings[i].emailInfo + ' < /a>';
    '<a href = "../view/?id=' + i + '" > ' + savedStrings[i].phoneInfo + ' < /a>';



}
document.getElementById('contactInfo').innerHTML = htmlRows;*/