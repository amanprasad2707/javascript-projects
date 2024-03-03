const dob = document.getElementById("dob");
const btn = document.getElementById("btn");

const yearEl = document.getElementById("years");
const monthEl = document.getElementById("months");
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");


const makeTwoDigitNumber = (num) => {
  return (num > 9) ? num : `0${num}`;
}

const dateDifference = (dob) => {
  const currentDate = new Date();
  const dateOfBirth = new Date(dob);
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;

  yearEl.innerHTML = year
  monthEl.innerHTML = month
  dayEl.innerHTML = day
  hourEl.innerHTML = hour
  minuteEl.innerHTML = minute
  secondEl.innerHTML = second
  console.log(month)
}
btn.addEventListener("click", (e) => {
  if (dob.value === '') {
    alert('Please select a date')
  }
  else {

    document.querySelector('.timeContainer').classList.remove("hide");
    document.querySelector('h1').classList.add("hide");
    dateDifference(dob.value)
  }
})
