let name = prompt ("Lütfen adinizi giriniz")

document.getElementById("myName").innerHTML =name



var today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(today)
console.log(date)
document.getElementById("myClock").innerHTML =date;