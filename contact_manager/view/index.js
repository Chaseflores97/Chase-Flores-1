const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const indexNumber = urlParams.get('id');

console.log(indexNumber)

const localContacts = JSON.parse(localStorage.getItem("contactObj"));


const viewContactInfo = function () {

    let htmlFirstName = "";
    let htmlEmail = "";
    let htmlLastName = "";


    const viewFirstName = localContacts[indexNumber].firstN;
    const viewLastName = localContacts[indexNumber].lastName;
    const viewEmail = localContacts[indexNumber].emailInfo;
    const viewPhoneN = localContacts[indexNumber].phoneInfo;


    htmlFirstName += "<p>"
    htmlFirstName += "<p>" + viewFirstName + viewLastName + "</p>";
    htmlFirstName += "</p>"

    htmlEmail += "<p>"
    htmlEmail += "<p>" + viewEmail + "</p>";
    htmlEmail += "</p>"

    htmlLastName += "<p>"
    htmlLastName += "<p>" + viewPhoneN + "</p>";
    htmlLastName += "</p>"

    document.getElementById("displayFirstName").innerHTML = htmlFirstName;
    document.getElementById("displayEmail").innerHTML = htmlEmail;
    document.getElementById("displayPhoneNumber").innerHTML = htmlLastName;


}
viewContactInfo();