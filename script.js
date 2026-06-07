/* ===========================
   SCROLL PROGRESS BAR
=========================== */
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const scrollTop   = document.documentElement.scrollTop;
  const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = (scrollTop / totalHeight * 100) + "%";
});

/* ===========================
   CUSTOM CURSOR
=========================== */
const cursor      = document.getElementById("cursor");
const cursorTrail = document.getElementById("cursorTrail");
let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top  = mouseY + "px";
});
