//set interval for real time tracker
//event listener for form submit
//capture input data = set in local storage
// clear when input is saved
//print in table
    //reads saved projects
    //prints project
//render function
//remove project function

function displayTime(){
    //display time in header box
    
    const today = dayjs();
    const current = $('#time').text(today.format('MMM D, YYYY h:mm:ss a'));
    console.log(today);
}
setInterval( function(){
    displayTime();
},1000);