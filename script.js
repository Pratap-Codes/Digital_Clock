function updateClock(){
const now = new Date();
let hour = now.getHours();
const merideim = hour >= 12 ? "PM" : "AM";
hour = hour % 12 || 12;
hour = hour.toString().padStart(2, 0)
const minutes = now.getMinutes().toString().padStart(2, 0);
const seconds = now.getSeconds().toString().padStart(2, 0);
const timeString = `${hour}: ${minutes} : ${seconds}`;
document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);