//1-misol
//Bir nechta ranglardan iborat <div> bloklarni yarating (masalan, qizil, yashil, ko‘k).
//Har bir rang blokiga bosilganda, ekrandagi <p> matnining rangi o‘sha blok rangiga o‘zgarishi kerak.
//Rang bloklarini dinamik ravishda JavaScript yordamida yarating.

const div = document.getElementById("div");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const text = document.getElementById("text");

btn1 &&
  btn1.addEventListener("click", function (event) {
    event.preventDefault;
    text.style.backgroundColor = "red";
  });

btn2 &&
  btn2.addEventListener("click", function (event) {
    event.preventDefault;
    text.style.backgroundColor = "yellow";
  });

btn3 &&
  btn3.addEventListener("click", function (event) {
    event.preventDefault;
    text.style.backgroundColor = "blue";
  });

btn4 &&
  btn4.addEventListener("click", function (event) {
    event.preventDefault;
    text.style.backgroundColor = "black";
  });

//2-misol
//Bir tugma (Start) va bir <p> elementi yarating.
//Tugmani bosganda, vaqtni hisoblash boshlanadi va <p> elementda ketayotgan soniyalar ko‘rinib turadi (1, 2, 3...).
//Boshqa tugma (Stop) yordamida vaqtni to‘xtatish mumkin bo‘lsin.
//Yana bir tugma (Reset) vaqtni qayta boshlash uchun mo‘ljallangan bo‘lsin.

let timerInterval;
let seconds = 0;

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

start &&
  start.addEventListener("click", () => {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        seconds++;
        timer.textContent = seconds;
      }, 1000);
    }
  });

stop &&
  stop.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
  });

reset &&
  reset.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    timer.textContent = seconds;
  });

//3-misol
//Bir nechta rasmlardan iborat grid tuzing (masalan, hayvonlar, mashinalar, tabiat rasmlari).
//Rasmlarning ustiga tegishli kategoriya yozuvi qo‘shing (masalan, "Tabiat", "Mashina").
//Yuqorida <input> qidiruv maydoni va "Filtrlash" tugmasini joylashtiring.
//Foydalanuvchi kategoriya nomini kiritib "Filtrlash" tugmasini bossin, va faqat mos keluvchi rasmlar ko‘rinib tursin.

function filterImages() {
  const input = document.getElementById("category-input").value.toLowerCase();
  const items = document.querySelectorAll(".grid-item");

  items.forEach((item) => {
    const category = item.getAttribute("data-category").toLowerCase();
    if (category.includes(input)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}
