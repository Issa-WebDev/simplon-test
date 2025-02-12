const toggleBtn = document.getElementById("toggleBtn");
const btnMessage = document.getElementById("btnMessage");
const message = document.getElementById("message");

// toggle lightMode
let theme = false;
toggleBtn.addEventListener("click", toggleFunc);

function toggleFunc() {
  theme = !theme;
  document.body.classList.toggle("lightMode", theme);

  theme ? (toggleBtn.style.color = "#000") : (toggleBtn.style.color = "#fff");
}

// message
btnMessage.addEventListener("click", () => {
  document.querySelector(".text").style.display = "none";
  btnMessage.style.display = "none";
  const strMessage = "Merci💘❤️d'avoir visiter ma page personnelle!";
  let index = 0;
  const intervalId = setInterval(() => {
    message.textContent = strMessage.slice(0, index++);

    if (index > message.length) clearInterval(intervalId);
  }, 100);
});
