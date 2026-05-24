/* ===========================
   SCROLL PROGRESS BAR
=========================== */
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / totalHeight) * 100;
  progressBar.style.width = progress + "%";
});


/* ===========================
   CUSTOM CURSOR
=========================== */
const cursor      = document.getElementById("cursor");
const cursorTrail = document.getElementById("cursorTrail");

let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top  = mouseY + "px";
});

function animateTrail() {
  trailX += (mouseX - trailX) * 0.12;
  trailY += (mouseY - trailY) * 0.12;
  cursorTrail.style.left = trailX + "px";
  cursorTrail.style.top  = trailY + "px";
  requestAnimationFrame(animateTrail);
}
animateTrail();

// Cursor grow on hover — includes freelance cards too
document.querySelectorAll("a, button, .skill-pill, .cert-card, .project-card, .project-card--freelance").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
    cursorTrail.style.transform = "translate(-50%, -50%) scale(1.5)";
    // Green tint for freelance cards, blue for others
    if (el.classList.contains("project-card--freelance")) {
      cursorTrail.style.borderColor = "rgba(0,200,83,0.6)";
    } else {
      cursorTrail.style.borderColor = "rgba(0,229,160,0.6)";
    }
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursorTrail.style.transform = "translate(-50%, -50%) scale(1)";
    cursorTrail.style.borderColor = "rgba(0,194,255,0.4)";
  });
});


/* ===========================
   REVEAL ON SCROLL
=========================== */
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 80;
    if (top < trigger) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


/* ===========================
   TYPING EFFECT (HERO)
=========================== */
const subtitleEl = document.getElementById("typedSubtitle");
const phrases = [
  "Embedded Systems Engineer",
  "IoT Developer",
  "PCB Designer",
  "Freelance Project Builder",
  "ECE Student @ VCET"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 65;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    subtitleEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1800;
    } else {
      typingSpeed = 65;
    }
  } else {
    subtitleEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 38;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, typingSpeed);
}

window.addEventListener("load", () => {
  setTimeout(type, 600);
});


/* ===========================
   BACK TO TOP BUTTON
=========================== */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    topBtn.style.display = "flex";
    topBtn.style.alignItems = "center";
    topBtn.style.justifyContent = "center";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ===========================
   STAGGERED CARD ANIMATION
=========================== */
window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".reveal");
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.06}s`;
  });
});


/* ===========================
   RIPPLE EFFECT ON BUTTONS
   (college + freelance)
=========================== */
document.querySelectorAll(".project-btn, .project-btn--freelance, #topBtn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    Object.assign(ripple.style, {
      left: x + "px",
      top: y + "px",
      position: "absolute",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.55)",
      transform: "scale(0)",
      animation: "rippleEffect 0.55s linear",
      pointerEvents: "none"
    });

    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

const rippleStyle = document.createElement("style");
rippleStyle.textContent = `
  @keyframes rippleEffect {
    to { transform: scale(18); opacity: 0; }
  }
`;
document.head.appendChild(rippleStyle);


/* ===========================
   PROJECT IMAGE FALLBACK
   (college + freelance)
=========================== */
document.querySelectorAll(".project-img-wrap").forEach((wrap) => {
  const img = wrap.querySelector(".project-img");
  if (img) {
    img.addEventListener("error", () => {
      wrap.classList.add("img-fallback");
      const overlay = wrap.querySelector(".project-img-overlay");
      if (overlay) overlay.style.opacity = "1";
    });
  }
});
