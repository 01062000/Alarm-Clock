/** @format */

console.log("app running");

const currentTimeElement = document.querySelector(".time");
const selectedTime = document.querySelector("#selectedTime");
const alarmsContainer = document.querySelector(".alarmsContainer");
const am_pm = document.querySelector("#am-pm");

const setAlarmBtn = document.querySelector(".setAlarmBtn");
var currentTime;
var alarmDiv;
//adding event listener to set alarm
setAlarmBtn.addEventListener("click", () => {
  console.log("time :" + currentTime);
  console.log("selected time :" + selectedTime.value);
  console.log(new Date(selectedTime.value));
  alarmDiv = document.createElement("div");
  alarmDiv.classList.add("alarmDiv");
  var alarmPara = document.createElement('p');
  alarmPara.innerText = selectedTime.value;
  var delAlarmBtn = document.createElement('button');
  delAlarmBtn.innerHTML = "Delete";
  console.log(alarmsContainer);
  delAlarmBtn.classList.add("delAlarmBtn");
  alarmDiv.append(alarmPara);
  alarmDiv.append(delAlarmBtn);
  alarmsContainer.append(alarmDiv);
  var delAlarmBtn = document.querySelector(".delAlarmBtn");
  delAlarmBtn.addEventListener('click', () => {
    alarmsContainer.removeChild(alarmDiv);
    clearInterval(intervalID);
  })
  //creating a set interval
  setAlarmInterval();

});
//alert method calls when the time goes off
function setAlarm(){
    if(currentTime == `${selectedTime.value}`){
        clearInterval(intervalID);
        alarmsContainer.removeChild(alarmDiv);
        alert("Alarm Ringing");
    }
}
//interval id
var intervalID;
function setAlarmInterval(){
    intervalID =  setInterval(setAlarm, 1000);
}

//function to get the cuurent time 
function getCurrentTime() {
  currentTime = new Date();
  currentTime = currentTime.toLocaleTimeString("it-IT");
  currentTimeElement.innerHTML = currentTime;
}
setInterval(getCurrentTime, 1000);
