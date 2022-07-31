const clock = function() {
    const fullDate = new Date();

    let hours = fullDate.getHours();
    
    let mins = fullDate.getMinutes();
    
    let seconds = fullDate.getSeconds(); 

    if (hours < 10) {
    hours = "0" + hours; 
    }
    if (mins < 10) {
    mins = "0"+ mins; 
    } 
    if (seconds < 10) {

        seconds = "0" + seconds;
    }



    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = ":" + mins;
    document.getElementById("second").innerHTML = ":" + seconds;


} 

setInterval(clock, 1000)
