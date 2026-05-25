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

(function animateTrail() {
  trailX += (mouseX - trailX) * 0.11;
  trailY += (mouseY - trailY) * 0.11;
  cursorTrail.style.left = trailX + "px";
  cursorTrail.style.top  = trailY + "px";
  requestAnimationFrame(animateTrail);
})();

document.querySelectorAll("a, button, .skill-pill, .cert-card, .project-card, .project-btn, .info-row--clickable, .award-cert-preview").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(2.2)";
    cursorTrail.style.transform = "translate(-50%,-50%) scale(1.6)";
    if (el.classList.contains("project-card--freelance") || el.classList.contains("project-btn--freelance")) {
      cursor.style.background = "#34d399";
      cursor.style.boxShadow  = "0 0 10px #34d399";
      cursorTrail.style.borderColor = "rgba(52,211,153,0.6)";
    } else if (el.classList.contains("award-cert-preview")) {
      cursor.style.background = "#fbbf24";
      cursor.style.boxShadow  = "0 0 10px #fbbf24";
      cursorTrail.style.borderColor = "rgba(251,191,36,0.6)";
    } else {
      cursor.style.background = "#38bdf8";
      cursor.style.boxShadow  = "0 0 10px #38bdf8";
      cursorTrail.style.borderColor = "rgba(56,189,248,0.6)";
    }
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(1)";
    cursorTrail.style.transform = "translate(-50%,-50%) scale(1)";
    cursor.style.background = "#38bdf8";
    cursor.style.boxShadow  = "0 0 10px #38bdf8";
    cursorTrail.style.borderColor = "rgba(56,189,248,0.5)";
  });
});

/* ===========================
   CLICK-TO-REVEAL (Contact & Personal)
   — Click once to reveal, click again to hide
   — Also opens a GitHub-style link when revealed
=========================== */
function toggleReveal(row) {
  const valEl = row.querySelector(".info-hidden");
  if (!valEl) return;

  if (valEl.classList.contains("revealed")) {
    // Hide again
    valEl.classList.remove("revealed");
    valEl.textContent = "••••••••••••";
    row.classList.remove("done");
    // Remove link button if present
    const existingBtn = row.querySelector(".info-link-btn");
    if (existingBtn) existingBtn.remove();
  } else {
    // Reveal
    valEl.classList.add("revealed");
    valEl.textContent = valEl.dataset.value;
    row.classList.add("done");

    // If row has a data-link, show a GitHub-style open button
    const link = row.dataset.link;
    if (link) {
      const existingBtn = row.querySelector(".info-link-btn");
      if (!existingBtn) {
        const btn = document.createElement("a");
        btn.href = link;
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
        btn.className = "info-link-btn";
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Open`;
        // Insert after info-val
        const infoDiv = row.querySelector("div");
        if (infoDiv) infoDiv.appendChild(btn);
      }
    }
  }
}
function toggleBox(box) {
  const val = box.querySelector(".info-box-val");
  if (!val) return;
  if (box.classList.contains("revealed")) {
    box.classList.remove("revealed");
    val.textContent = "Click to view";
  } else {
    box.classList.add("revealed");
    val.textContent = val.dataset.value;
  }
}

/* ===========================
   REVEAL ON SCROLL
=========================== */
const reveals = document.querySelectorAll(".reveal");
function revealSections() {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 70) el.classList.add("active");
  });
}
window.addEventListener("scroll", revealSections);
window.addEventListener("load",   revealSections);
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
    if (charIdx === phrase.length) { deleting = true; speed = 2000; } else speed = 65;
  } else {
    subtitleEl.textContent = phrase.slice(0, --charIdx);
    speed = 36;
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
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
      left: (e.clientX - rect.left) + "px", top: (e.clientY - rect.top) + "px",
      position: "absolute", width: "6px", height: "6px", borderRadius: "50%",
      background: "rgba(255,255,255,0.5)", transform: "scale(0)",
      animation: "rippleEff 0.5s linear", pointerEvents: "none"
    });
    this.style.position = "relative"; this.style.overflow = "hidden";
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

/* ===========================
   CERTIFICATE MODAL
=========================== */
function openCert(src, title) {
  document.getElementById("certModalImg").src   = src;
  document.getElementById("certModalTitle").textContent = title;
  document.getElementById("certModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCert() {
  document.getElementById("certModal").classList.remove("open");
  document.body.style.overflow = "";
}

function closeCertBackdrop(e) {
  if (e.target === document.getElementById("certModal")) closeCert();
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCert();
});
