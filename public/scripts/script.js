//Date for index.html script
/***********************************************************************************************/

//Here i get the data out of the user his browser of what date it is for him right now
const dateToday = new Date();
//And here i put the information that i got out of the users browser in to the id named: date and also give it the fields i want it to have.
document.getElementById("date").textContent = dateToday.toLocaleDateString(undefined, {
   //Here i give the fields that i want to show on my app.
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"

});

/***********************************************************************************************/


