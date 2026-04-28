/* =========================
   REVEAL ANIMATION
========================= */
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const visiblePoint = window.innerHeight - 100;

        if (top < visiblePoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


/* =========================
   TYPING EFFECT
========================= */
const subtitle = document.querySelector(".hero p");

if (subtitle) {
    const text = subtitle.innerText;
    subtitle.innerText = "";
    let i = 0;

    function typeText() {
        if (i < text.length) {
            subtitle.innerText += text.charAt(i);
            i++;
            setTimeout(typeText, 60);
        }
    }

    typeText();
}


/* =========================
   BACK TO TOP BUTTON
========================= */
const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "↑";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =========================
   BUTTON RIPPLE EFFECT
========================= */
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const x = e.offsetX;
        const y = e.offsetY;

        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.style.position = "absolute";
        ripple.style.width = "12px";
        ripple.style.height = "12px";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,0.6)";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple 0.6s linear";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});


/* =========================
   CURSOR GLOW EFFECT
========================= */
const cursor = document.createElement("div");
cursor.style.width = "18px";
cursor.style.height = "18px";
cursor.style.borderRadius = "50%";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.background = "rgba(0,194,255,0.25)";
cursor.style.transform = "translate(-50%, -50%)";
cursor.style.zIndex = "9999";
cursor.style.transition = "0.08s linear";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


/* =========================
   SCROLL PROGRESS BAR
========================= */
const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";
progressBar.style.background = "linear-gradient(90deg,#00c2ff,#0d47a1)";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;
    progressBar.style.width = progress + "%";
});


/* =========================
   ADD RIPPLE KEYFRAMES
========================= */
const style = document.createElement("style");

style.innerHTML = `
button{
    position:relative;
    overflow:hidden;
}

@keyframes ripple{
    to{
        transform:scale(14);
        opacity:0;
    }
}
`;

document.head.appendChild(style);
