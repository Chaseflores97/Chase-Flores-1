console.log("Welcome to Create!");
const saveData = function () {


    if (!localStorage.getItem('contactObj')) {
        localStorage.setItem('contactObj', JSON.stringify([]));
    } 
   
    const theStr = localStorage.getItem('contactObj');     
    const theArray = JSON.parse(theStr);
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const phoneNumber = document.getElementById('phoneNumber').value;


    const contactObj = {

        firstN: firstName,
        lastName: lastName,
        emailInfo: emailAddress,
        phoneInfo: phoneNumber

    }; 

    theArray.push(contactObj);




    const convertedToStr = JSON.stringify(theArray);
    localStorage.setItem('contactObj', convertedToStr);
    console.log(contactObj);
};




















   










































/*firstName.addEventListener('submit', () => {



    console.log('firstName1')});




lastName.addEventListener('submit', () => {

    console.log('lastName')});




emailAddress.addEventListener('submit', () => {
    console.log('emailAddress')});



phoneNumber.addEventListener('submit', () => {
console.log('phoneNumber1')});

}
saveData(); */