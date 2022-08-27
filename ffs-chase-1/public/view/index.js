const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const indexNumber = urlParams.get('id')[0];

console.log(indexNumber)


 


const viewContactInfo = function () {
    let localContacts;
    const theFunctions = firebase.functions();
    theFunctions.useEmulator("localhost", 5001);
    console.log("About to make a network request!!!");
    theFunctions
        .httpsCallable("getContact")(indexNumber)
        .then((res) => {
            console.log("network request is DONE!");
            console.log(res);
            localContacts = res;

        

        let htmlFirstName = "";
        let htmlEmail = "";
        let htmlLastName = "";
        
    
    
        const viewFirstName = localContacts.data[0].firstName; 
        const viewLastName = localContacts.data[0].lastName;
        const viewEmail = localContacts.data[0].email;
        const viewPhoneN = localContacts.data[0].phone;
    
    
        htmlFirstName += "<p>"
        htmlFirstName += "<p>" + viewFirstName + " " + viewLastName + "</p>"; 
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
         
    
    
    
        });




};
viewContactInfo(); 
