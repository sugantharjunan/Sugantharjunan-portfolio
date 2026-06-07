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
<!-- ══════════════════ JAVASCRIPT ══════════════════ -->
<script>

/* ============================================================
   VOICE ASSISTANT CONFIG
   ⚠ Paste your Anthropic API key here
   Free key at: https://console.anthropic.com
============================================================ */
const VA_API_KEY = "YOUR_ANTHROPIC_API_KEY_HERE";

const VA_BIO = `
  Suganth Arjunan is an Electronics & Communication Engineering student at
  Velalar College of Engineering and Technology (VCET), Erode, Tamil Nadu.
  Born 27 April 2006. From Tiruppur, Tamil Nadu. Indian nationality.

  EDUCATION:
  - B.E ECE at VCET — 80%
  - Class XII, Bharathi Matric Higher Secondary School — 77%
  - Class X, Mahidhar Academy High School — 100% (perfect score)

  INTERNSHIP: San Tech Innovation, December 2024.
  Embedded systems: microcontrollers, sensors, communication protocols.

  SKILLS: Arduino IDE, Embedded C, Proteus, PCB Design, Data Entry,
  C Programming, ESP8266, ESP32, NodeMCU, GPS, GSM, Firebase, IoT,
  RFID, Fingerprint Sensors, DHT11, MQ135, MPU6050.

  PROJECTS:
  1. Public Transport Tracking System — GPS + ESP8266 + Firebase + SMS
  2. Smart Environmental Monitoring — Arduino, DHT11, MQ135, cloud
  3. Smart Agriculture Monitoring — NodeMCU, soil sensors, automation
  4. IoT Smart Health Tracking & Air Purifying System — ESP32, hazardous env

  FREELANCE PROJECTS:
  1. ESP32 Smart Crutch — Fall Detection (MPU6050 + GSM alerts)
  2. Smart SOS Emergency Alert (ESP32 + GSM + GPS)
  3. Smart Rabies Vaccination Monitoring (RFID + Fingerprint)
  4. IoT Smart Solar Monitoring (voltage, current, dashboard)
  5. IoT Air Pipeline Leak Detection for Industrial Systems
  6. Railway Track Crack Detection Robot (ESP32, GPS, GSM)

  AWARD: 3rd Prize, IDEAFEST '25, VCET Silver Jubilee (20 Nov 2025)
  — GSM-GPS Real-Time Location Tracking System Using ESP8266

  CERTIFICATIONS: Industry 4.0 & IoT, Arduino, Programming with ChatGPT,
  Embedded Systems, Sensors & Actuators, 9-Day Robotics Workshop.

  CONTACT: suganthmanoj48@gmail.com
  GitHub: github.com/sugantharjunan
  LinkedIn: linkedin.com/in/suganth-arjunan
  OPEN TO: Freelance, internships, full-time — Embedded Systems, IoT, PCB.
`;

/* ── Scroll Progress ── */
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const s = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = (s / h * 100) + "%";
});

/* ── Custom Cursor ── */
const cursor = document.getElementById("cursor");
const cursorTrail = document.getElementById("cursorTrail");
let mouseX=0,mouseY=0,trailX=0,trailY=0;
document.addEventListener("mousemove",(e)=>{ mouseX=e.clientX; mouseY=e.clientY; cursor.style.left=mouseX+"px"; cursor.style.top=mouseY+"px"; });
(function animateTrail(){ trailX+=(mouseX-trailX)*0.11; trailY+=(mouseY-trailY)*0.11; cursorTrail.style.left=trailX+"px"; cursorTrail.style.top=trailY+"px"; requestAnimationFrame(animateTrail); })();
document.querySelectorAll("a,button,.skill-pill,.cert-card,.project-card,.project-btn,.award-cert-preview,.va-inline-trigger,.va-q,.info-action").forEach((el)=>{
  el.addEventListener("mouseenter",()=>{
    cursor.style.transform="translate(-50%,-50%) scale(2.2)";
    cursorTrail.style.transform="translate(-50%,-50%) scale(1.6)";
    if(el.classList.contains("project-card--freelance")||el.classList.contains("project-btn--freelance")){
      cursor.style.background="#34d399";cursor.style.boxShadow="0 0 10px #34d399";cursorTrail.style.borderColor="rgba(52,211,153,0.6)";
    } else if(el.classList.contains("award-cert-preview")){
      cursor.style.background="#fbbf24";cursor.style.boxShadow="0 0 10px #fbbf24";cursorTrail.style.borderColor="rgba(251,191,36,0.6)";
    } else {
      cursor.style.background="#38bdf8";cursor.style.boxShadow="0 0 10px #38bdf8";cursorTrail.style.borderColor="rgba(56,189,248,0.6)";
    }
  });
  el.addEventListener("mouseleave",()=>{
    cursor.style.transform="translate(-50%,-50%) scale(1)";
    cursorTrail.style.transform="translate(-50%,-50%) scale(1)";
    cursor.style.background="#38bdf8";cursor.style.boxShadow="0 0 10px #38bdf8";cursorTrail.style.borderColor="rgba(56,189,248,0.5)";
  });
});

/* ── Scroll Reveal ── */
const reveals = document.querySelectorAll(".reveal");
function revealSections(){ reveals.forEach((el)=>{ if(el.getBoundingClientRect().top<window.innerHeight-70) el.classList.add("active"); }); }
window.addEventListener("scroll", revealSections);
window.addEventListener("load",   revealSections);
window.addEventListener("load", ()=>{ document.querySelectorAll(".reveal").forEach((el,i)=>{ el.style.transitionDelay=(i*0.055)+"s"; }); });

/* ── Typing Effect ── */
const subtitleEl = document.getElementById("typedSubtitle");
const phrases = ["Embedded Systems Engineer","IoT Developer","PCB Designer","Freelance Project Builder","ECE Student @ VCET"];
let phraseIdx=0,charIdx=0,deleting=false,typingSpeed=65;
function type(){
  const phrase=phrases[phraseIdx];
  if(!deleting){ subtitleEl.textContent=phrase.slice(0,++charIdx); if(charIdx===phrase.length){deleting=true;typingSpeed=2000;}else typingSpeed=65; }
  else{ subtitleEl.textContent=phrase.slice(0,--charIdx); typingSpeed=36; if(charIdx===0){deleting=false;phraseIdx=(phraseIdx+1)%phrases.length;} }
  setTimeout(type,typingSpeed);
}
window.addEventListener("load",()=>setTimeout(type,800));

/* ── Back to Top ── */
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll",()=>{ if(window.scrollY>400){topBtn.style.display="flex";topBtn.style.alignItems="center";topBtn.style.justifyContent="center";}else topBtn.style.display="none"; });
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

/* ── Ripple ── */
document.querySelectorAll(".project-btn,.project-btn--freelance,#topBtn").forEach((btn)=>{
  btn.addEventListener("click",function(e){
    const ripple=document.createElement("span");
    const rect=this.getBoundingClientRect();
    Object.assign(ripple.style,{left:(e.clientX-rect.left)+"px",top:(e.clientY-rect.top)+"px",position:"absolute",width:"6px",height:"6px",borderRadius:"50%",background:"rgba(255,255,255,0.5)",transform:"scale(0)",animation:"rippleEff 0.5s linear",pointerEvents:"none"});
    this.style.position="relative";this.style.overflow="hidden";
    this.appendChild(ripple);setTimeout(()=>ripple.remove(),500);
  });
});
const rs=document.createElement("style");rs.textContent=`@keyframes rippleEff{to{transform:scale(20);opacity:0;}}`;document.head.appendChild(rs);

/* ── Image Fallback ── */
document.querySelectorAll(".project-img-wrap").forEach((wrap)=>{
  const img=wrap.querySelector(".project-img");
  if(img){ img.addEventListener("error",()=>{ wrap.classList.add("img-fallback"); const ov=wrap.querySelector(".project-img-overlay"); if(ov)ov.style.opacity="1"; }); }
});

/* ── Cert Modal ── */
function openCert(src,title){ document.getElementById("certModalImg").src=src; document.getElementById("certModalTitle").textContent=title; document.getElementById("certModal").classList.add("open"); document.body.style.overflow="hidden"; }
function closeCert(){ document.getElementById("certModal").classList.remove("open"); document.body.style.overflow=""; }
function closeCertBackdrop(e){ if(e.target===document.getElementById("certModal"))closeCert(); }
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape"){ closeCert(); if(vaOpenState) vaClose(); } });

/* ============================================================
   VOICE ASSISTANT
============================================================ */
let vaOpenState = false;
let vaListening = false;
let vaSpeaking  = false;
let vaRecog     = null;

const vaOrb     = document.getElementById("va-orb");
const vaPanel   = document.getElementById("va-panel");
const vaTooltip = document.getElementById("va-tooltip");

function vaOpen()   { vaOpenState=true;  vaPanel.classList.add("va-open");    vaTooltip.classList.remove("show"); }
function vaClose()  { vaOpenState=false; vaPanel.classList.remove("va-open"); vaStopAll(); }
function vaToggle() { vaOpenState ? vaClose() : vaOpen(); }

vaOrb.addEventListener("mouseenter",()=>{ if(!vaOpenState) vaTooltip.classList.add("show"); });
vaOrb.addEventListener("mouseleave",()=>vaTooltip.classList.remove("show"));

function vaSetWave(on,type){
  for(let i=1;i<=11;i++){
    const b=document.getElementById("vb"+i);
    b.classList.toggle("va-active",on);
    b.classList.toggle("va-speak",on&&type==="speak");
  }
}
function vaSetOrb(state){ vaOrb.classList.remove("va-listening","va-speaking"); if(state)vaOrb.classList.add(state); }
function vaSetStatus(msg,cls){ const el=document.getElementById("va-status"); el.textContent=msg; el.className="va-status"+(cls?" "+cls:""); }

function vaToggleMic(){ if(vaSpeaking){vaStopSpeaking();return;} if(vaListening){vaStopListening(false);return;} vaStartListening(); }

function vaStartListening(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){ vaSetStatus("Speech not supported — use quick buttons"); return; }
  vaRecog=new SR(); vaRecog.lang="en-US"; vaRecog.interimResults=false;
  vaRecog.onresult=(e)=>{ const q=e.results[0][0].transcript; vaStopListening(false); vaAsk(q); };
  vaRecog.onerror=()=>{ vaStopListening(false); vaSetStatus("Could not hear — try again"); };
  vaRecog.onend=()=>{ if(vaListening)vaStopListening(false); };
  vaRecog.start();
  vaListening=true; vaSetWave(true,"listen"); vaSetOrb("va-listening"); vaSetStatus("Listening…","va-on");
  document.getElementById("va-mic-btn").classList.add("va-listening");
  document.getElementById("va-mic-label").textContent="Listening… tap to stop";
}
function vaStopListening(keep){
  vaListening=false; try{vaRecog&&vaRecog.stop();}catch(e){}
  vaSetWave(false); vaSetOrb("");
  document.getElementById("va-mic-btn").classList.remove("va-listening");
  document.getElementById("va-mic-label").textContent="Tap to speak";
  if(!keep)vaSetStatus("Thinking…","va-on");
}
function vaStopSpeaking(){
  window.speechSynthesis.cancel(); vaSpeaking=false; vaSetWave(false); vaSetOrb("");
  document.getElementById("va-mic-btn").classList.remove("va-speaking");
  document.getElementById("va-mic-label").textContent="Tap to speak";
  vaSetStatus("Ask me anything about Suganth");
}
function vaStopAll(){ if(vaListening)vaStopListening(true); if(vaSpeaking)vaStopSpeaking(); }

async function vaAsk(question){
  if(!question||!question.trim())return;
  vaOpen(); vaSetStatus("Thinking…","va-on"); vaSetWave(true,"listen");
  const respEl=document.getElementById("va-response");
  respEl.classList.add("va-show"); respEl.textContent="…";

  if(!VA_API_KEY||VA_API_KEY==="YOUR_ANTHROPIC_API_KEY_HERE"){
    vaSetWave(false); vaSetStatus("Add your API key in the script");
    respEl.textContent="⚠ Open index.html, find VA_API_KEY near the top of the <script>, and paste your free Anthropic API key. Get one at console.anthropic.com";
    return;
  }
  const systemPrompt=`You are a concise friendly voice assistant on Suganth Arjunan's portfolio. Answer ONLY from the bio below in 2-3 sentences max, third person, warm tone. If not in bio, say to contact Suganth at suganthmanoj48@gmail.com.\n\nBIO:\n${VA_BIO}`;
  try{
    const res=await fetch("https://api.anthropic.com/v1/messages",{
      method:"POST",
      headers:{"Content-Type":"application/json","x-api-key":VA_API_KEY,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},
      body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:200,system:systemPrompt,messages:[{role:"user",content:question}]})
    });
    const data=await res.json();
    const answer=data.content?.[0]?.text||"Sorry, no response received.";
    respEl.textContent=answer; vaSetWave(false); vaSetStatus("Tap mic to ask another question"); vaSpeak(answer);
  }catch(err){
    respEl.textContent="Connection error — check your API key and try again.";
    vaSetWave(false); vaSetStatus("Error. Try again.");
  }
}

function vaSpeak(text){
  if(!window.speechSynthesis)return;
  window.speechSynthesis.cancel();
  const utter=new SpeechSynthesisUtterance(text);
  utter.rate=0.95; utter.pitch=1.05;
  utter.onstart=()=>{ vaSpeaking=true; vaSetWave(true,"speak"); vaSetOrb("va-speaking"); vaSetStatus("Speaking… tap mic to stop","va-speak"); document.getElementById("va-mic-btn").classList.add("va-speaking"); document.getElementById("va-mic-label").textContent="Tap to stop"; };
  utter.onend=()=>{ vaSpeaking=false; vaSetWave(false); vaSetOrb(""); document.getElementById("va-mic-btn").classList.remove("va-speaking"); document.getElementById("va-mic-label").textContent="Tap to speak"; vaSetStatus("Ask me anything about Suganth"); };
  window.speechSynthesis.speak(utter);
}

document.addEventListener("click",(e)=>{ if(vaOpenState&&!vaPanel.contains(e.target)&&e.target!==vaOrb)vaClose(); });

</script>
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
