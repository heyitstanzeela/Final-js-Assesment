//fourth question
function compareDate(){
var d1 = prompt("Enter a date (mm/dd/yyyy)");   
var d2 = prompt("Enter another date(mm/dd/yyyy)");
   
var date1 =new Date((d1));

var date2 = new Date((d2));
var diff = Math.abs(date1.getTime()-date2.getTime());   
    
var daydiff = Math.round(diff / (1000 * 60 * 60 * 24));   
console.log(" Total number of days between  " + date1 +" and "  + date2 + "  is:  " + daydiff + " days" );
document.write(" Total number of days between <b> " + date1 + " </b> and <b> " + date2 + " </b> is: <b> " + daydiff + " days </b>" );
}
compareDate();