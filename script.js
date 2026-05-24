/* ===========================
   SCROLL PROGRESS BAR
=========================== */
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  const scrollTop    = document.documentElement.scrollTop;
  const totalHeight  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = (scrollTop / totalHeight * 100) + "%";
});


/* ===========================
   CUSTOM CURSOR
=========================== */
const cursor      = document.getElementById("cursor");
const cursorTrail = document.getElementById("cursorTrail");

let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top  = mouseY + "px";
});

(function animateTrail() {
  trailX += (mouseX - trailX) * 0.11;
  trailY += (mouseY - trailY) * 0.11;
  cursorTrail.style.left = trailX + "px";
  cursorTrail.style.top  = trailY + "px";
  requestAnimationFrame(animateTrail);
})();

// Cursor reactions
document.querySelectorAll("a, button, .skill-pill, .cert-card, .project-card, .project-btn").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(2.2)";
    cursorTrail.style.transform = "translate(-50%,-50%) scale(1.6)";

    if (el.classList.contains("project-card--freelance") || el.classList.contains("project-btn--freelance")) {
      cursor.style.background = "#34d399";
      cursor.style.boxShadow = "0 0 10px #34d399";
      cursorTrail.style.borderColor = "rgba(52,211,153,0.6)";
    } else {
      cursor.style.background = "#38bdf8";
      cursor.style.boxShadow = "0 0 10px #38bdf8";
      cursorTrail.style.borderColor = "rgba(56,189,248,0.6)";
    }
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(1)";
    cursorTrail.style.transform = "translate(-50%,-50%) scale(1)";
    cursor.style.background = "#38bdf8";
    cursor.style.boxShadow = "0 0 10px #38bdf8";
    cursorTrail.style.borderColor = "rgba(56,189,248,0.5)";
  });
});


/* ===========================
   REVEAL ON SCROLL
=========================== */
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 70) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load",   revealSections);

// Staggered delay
window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = (i * 0.055) + "s";
  });
});


/* ===========================
   TYPING EFFECT — HERO
=========================== */
const subtitleEl = document.getElementById("typedSubtitle");
const phrases = [
  "Embedded Systems Engineer",
  "IoT Developer",
  "PCB Designer",
  "Freelance Project Builder",
  "ECE Student @ VCET"
];

let phraseIdx = 0, charIdx = 0, deleting = false, speed = 65;

function type() {
  const phrase = phrases[phraseIdx];
  if (!deleting) {
    subtitleEl.textContent = phrase.slice(0, ++charIdx);
    if (charIdx === phrase.length) { deleting = true; speed = 2000; }
    else speed = 65;
  } else {
    subtitleEl.textContent = phrase.slice(0, --charIdx);
    speed = 36;
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(type, speed);
}

window.addEventListener("load", () => setTimeout(type, 800));


/* ===========================
   BACK TO TOP
=========================== */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "flex";
    topBtn.style.alignItems = "center";
    topBtn.style.justifyContent = "center";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


/* ===========================
   RIPPLE EFFECT
=========================== */
document.querySelectorAll(".project-btn, .project-btn--freelance, #topBtn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    Object.assign(ripple.style, {
      left: (e.clientX - rect.left) + "px",
      top:  (e.clientY - rect.top)  + "px",
      position: "absolute",
      width: "6px", height: "6px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.5)",
      transform: "scale(0)",
      animation: "rippleEff 0.5s linear",
      pointerEvents: "none"
    });
    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});

const rs = document.createElement("style");
rs.textContent = `@keyframes rippleEff { to { transform: scale(20); opacity: 0; } }`;
document.head.appendChild(rs);


/* ===========================
   IMAGE FALLBACK
=========================== */
document.querySelectorAll(".project-img-wrap").forEach((wrap) => {
  const img = wrap.querySelector(".project-img");
  if (img) {
    img.addEventListener("error", () => {
      wrap.classList.add("img-fallback");
      const ov = wrap.querySelector(".project-img-overlay");
      if (ov) ov.style.opacity = "1";
    });
  }
});
