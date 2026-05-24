/* ===========================
   IMPORTS & RESET
=========================== */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;600;700;800&display=swap');

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { scroll-behavior: smooth; }

/* ===========================
   CSS VARIABLES
=========================== */
:root {
  --primary:   #0d47a1;
  --primary-lt:#1565c0;
  --accent:    #00c2ff;
  --accent2:   #00e5a0;
  --dark:      #0b1f3a;
  --white:     #ffffff;
  --text:      #1a2333;
  --muted:     #5a6a80;
  --bg:        #f0f4fb;
  --card-bg:   rgba(255,255,255,0.95);
  --shadow-sm: 0 4px 16px rgba(13,71,161,0.08);
  --shadow-md: 0 10px 40px rgba(13,71,161,0.12);
  --shadow-lg: 0 20px 60px rgba(13,71,161,0.18);
  --radius:    20px;
  --radius-sm: 12px;
}

/* ===========================
   BODY & BACKGROUND
=========================== */
body {
  font-family: 'Space Grotesk', sans-serif;
  color: var(--text);
  background-color: var(--bg);
  background-image:
    radial-gradient(circle at 20% 20%, rgba(0,194,255,0.07) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(13,71,161,0.07) 0%, transparent 50%);
  background-attachment: fixed;
  overflow-x: hidden;
  cursor: none;
}

/* ===========================
   SCROLL PROGRESS
=========================== */
#progressBar {
  position: fixed;
  top: 0; left: 0;
  height: 3px;
  width: 0%;
  z-index: 9999;
  background: linear-gradient(90deg, var(--accent), var(--accent2), var(--primary));
  border-radius: 0 4px 4px 0;
  transition: width 0.1s linear;
}

/* ===========================
   CUSTOM CURSOR
=========================== */
#cursor {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: 0.05s linear;
  mix-blend-mode: multiply;
}

#cursorTrail {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid rgba(0,194,255,0.4);
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: 0.15s ease-out;
}

/* ===========================
   HERO
=========================== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(160deg, rgba(11,31,58,0.93) 0%, rgba(13,71,161,0.85) 60%, rgba(0,194,255,0.7) 100%),
    url("https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
  padding: 60px 20px;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,194,255,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,194,255,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  from { transform: translateY(0); }
  to   { transform: translateY(40px); }
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  animation: fadeUp 0.9s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

.profile-ring {
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, var(--accent), var(--accent2), var(--primary));
  animation: ringRotate 6s linear infinite;
}

@keyframes ringRotate {
  from { box-shadow: 0 0 0 4px rgba(0,194,255,0.2), 0 0 40px rgba(0,194,255,0.3); }
  50%  { box-shadow: 0 0 0 8px rgba(0,229,160,0.2), 0 0 60px rgba(0,229,160,0.3); }
  to   { box-shadow: 0 0 0 4px rgba(0,194,255,0.2), 0 0 40px rgba(0,194,255,0.3); }
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--white);
  transition: transform 0.4s ease;
  display: block;
}

.profile-img:hover {
  transform: scale(1.06) rotate(3deg);
}

.hero-name {
  font-family: 'Syne', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.05rem;
  font-weight: 400;
  opacity: 0.9;
  letter-spacing: 0.04em;
  min-height: 1.5em;
  border-right: 2px solid var(--accent);
  padding-right: 4px;
  animation: blink 0.8s step-end infinite;
}

@keyframes blink {
  50% { border-color: transparent; }
}

.hero-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4px;
}

.hero-tags span {
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  backdrop-filter: blur(8px);
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.03em;
}

.hero-socials {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

.hero-social-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  color: var(--white);
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(8px);
  padding: 9px 20px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.9rem;
  transition: 0.3s ease;
}

.hero-social-btn svg {
  width: 18px;
  height: 18px;
}

.hero-social-btn:hover {
  background: rgba(0,194,255,0.25);
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,194,255,0.25);
}

/* ===========================
   CONTAINER
=========================== */
.container {
  max-width: 1080px;
  margin: 48px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.two-col-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* ===========================
   CARD
=========================== */
.card {
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  border-radius: var(--radius);
  padding: 32px;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(13,71,161,0.06);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--accent), var(--primary));
  border-radius: 4px 0 0 4px;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

/* Freelance card gets green left border */
.card--freelance::before {
  background: linear-gradient(180deg, #00e5a0, #00c853);
}

.card-label {
  font-family: 'Syne', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 18px;
}

.card--freelance .card-label {
  color: #00c853;
}

/* ===========================
   REVEAL ANIMATION
=========================== */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* ===========================
   CONTACT / PERSONAL INFO
=========================== */
.info-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(13,71,161,0.06);
}

.info-row:last-child { border-bottom: none; }

.info-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-key {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}

.info-val {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  word-break: break-all;
}

/* ===========================
   EDUCATION TIMELINE
=========================== */
.edu-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 28px;
}

.edu-timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--accent), var(--primary));
  border-radius: 2px;
}

.edu-item {
  position: relative;
  padding: 14px 0 14px 20px;
}

.edu-dot {
  position: absolute;
  left: -28px;
  top: 20px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--primary));
  border: 3px solid var(--white);
  box-shadow: 0 0 0 2px var(--accent);
}

.edu-content h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 3px;
}

.edu-content p {
  font-size: 0.85rem;
  color: var(--muted);
  margin-bottom: 5px;
}

.edu-score {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  padding: 3px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
}

.edu-score--gold {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
}

/* ===========================
   INTERNSHIP
=========================== */
.intern-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.intern-header {
  display: flex;
  align-items: center;
  gap: 14px;
}

.intern-icon {
  width: 46px;
  height: 46px;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.intern-header h3 {
  font-size: 1.05rem;
  font-weight: 700;
}

.intern-date {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
  letter-spacing: 0.04em;
}

.intern-desc {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.65;
}

/* ===========================
   PROJECTS GRID
=========================== */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

/* ===========================
   PROJECT CARD (COLLEGE)
=========================== */
.project-card {
  border-radius: 16px;
  overflow: hidden;
  background: white;
  border: 1px solid rgba(13,71,161,0.08);
  box-shadow: var(--shadow-sm);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: var(--shadow-lg);
}

/* ===========================
   PROJECT CARD (FREELANCE)
=========================== */
.project-card--freelance {
  border-top: 3px solid #00c853;
  border-left: 1px solid rgba(0,200,83,0.2);
  border-right: 1px solid rgba(0,200,83,0.1);
  border-bottom: 1px solid rgba(0,200,83,0.1);
}

.project-card--freelance:hover {
  box-shadow: 0 20px 60px rgba(0,200,83,0.18);
}

/* ===========================
   PROJECT IMAGE
=========================== */
.project-img-wrap {
  position: relative;
  height: 190px;
  background: linear-gradient(135deg, var(--dark) 0%, var(--primary-lt) 100%);
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.06);
}

.project-img-wrap.img-fallback {
  background: linear-gradient(135deg, var(--dark) 0%, #1565c0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card--freelance .project-img-wrap.img-fallback {
  background: linear-gradient(135deg, #003320 0%, #006630 100%);
}

.project-img-wrap.img-fallback .project-img {
  display: none;
}

.project-img-wrap.img-fallback .project-img-overlay {
  opacity: 1;
  background: transparent;
  font-size: 1.5rem;
  font-weight: 700;
}

.project-img-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(11,31,58,0.9), transparent);
  padding: 14px 16px 10px;
  opacity: 0;
  transition: 0.3s ease;
}

.project-card:hover .project-img-overlay {
  opacity: 1;
}

.project-img-overlay span {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.project-card--freelance .project-img-overlay span {
  color: #00e5a0;
}

/* ===========================
   PROJECT BODY
=========================== */
.project-body {
  padding: 18px 18px 20px;
}

.project-body h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--dark);
  line-height: 1.35;
}

.project-body p {
  font-size: 0.84rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 12px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.project-tags span {
  background: rgba(13,71,161,0.07);
  color: var(--primary);
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.project-card--freelance .project-tags span {
  background: rgba(0,200,83,0.08);
  color: #007a33;
}

/* Project buttons */
.project-btn {
  display: inline-block;
  text-decoration: none;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  padding: 8px 18px;
  border-radius: var(--radius-sm);
  font-size: 0.83rem;
  font-weight: 600;
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-btn:hover {
  opacity: 0.9;
  transform: translateX(4px);
}

.project-btn--freelance {
  background: linear-gradient(135deg, #00874a, #00c853);
}

/* ===========================
   FREELANCE BANNER
=========================== */
.freelance-banner {
  display: flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(135deg, rgba(0,200,83,0.06), rgba(0,229,160,0.08));
  border: 1.5px solid rgba(0,229,160,0.35);
  border-radius: 14px;
  padding: 16px 20px;
  margin-bottom: 22px;
}

.freelance-icon { font-size: 1.8rem; flex-shrink: 0; }

.freelance-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--dark);
}

.freelance-sub {
  font-size: 0.78rem;
  color: var(--muted);
  margin-top: 3px;
}

.freelance-status {
  margin-left: auto;
  flex-shrink: 0;
  background: linear-gradient(135deg, #00c853, #00e5a0);
  color: white;
  padding: 5px 16px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  animation: pulseBadge 2s ease-in-out infinite;
}

/* ===========================
   SKILLS
=========================== */
.skills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(13,71,161,0.08), rgba(0,194,255,0.08));
  border: 1.5px solid rgba(0,194,255,0.2);
  color: var(--primary);
  font-size: 0.87rem;
  font-weight: 600;
  transition: 0.3s ease;
  cursor: default;
}

.skill-pill:hover {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(13,71,161,0.2);
}

.skill-icon { font-size: 1rem; }

/* ===========================
   CERTIFICATIONS
=========================== */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 14px;
}

.cert-card {
  border-radius: 16px;
  padding: 20px 16px;
  text-align: center;
  background: linear-gradient(135deg, rgba(13,71,161,0.05), rgba(0,194,255,0.05));
  border: 1.5px solid rgba(0,194,255,0.15);
  transition: 0.3s ease;
  position: relative;
}

.cert-card:hover {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-color: transparent;
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 30px rgba(13,71,161,0.25);
}

.cert-card:hover .cert-title { color: white; }

.cert-icon {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.cert-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
  transition: color 0.3s;
}

.cert-badge {
  margin-top: 10px;
  display: inline-block;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.cert-card--new {
  border-color: rgba(0,229,160,0.4);
  background: linear-gradient(135deg, rgba(0,229,160,0.06), rgba(0,194,255,0.08));
}

.cert-badge--new {
  background: linear-gradient(135deg, #00c853, var(--accent2));
  animation: pulseBadge 2s ease-in-out infinite;
}

@keyframes pulseBadge {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0,229,160,0.4); }
  50%       { box-shadow: 0 0 0 6px rgba(0,229,160,0); }
}

/* ===========================
   FOOTER
=========================== */
footer {
  text-align: center;
  padding: 28px;
  color: var(--muted);
  font-size: 0.88rem;
}

footer strong { color: var(--primary); }

/* ===========================
   BACK TO TOP
=========================== */
#topBtn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  display: none;
  z-index: 900;
  box-shadow: 0 8px 24px rgba(13,71,161,0.3);
  transition: transform 0.3s ease;
}

#topBtn:hover {
  transform: translateY(-4px) scale(1.1);
}

/* ===========================
   RESPONSIVE
=========================== */
@media (max-width: 768px) {
  .two-col-grid { grid-template-columns: 1fr; }
  .hero-name { font-size: 2.2rem; }
  .profile-ring { width: 140px; height: 140px; }
  .card { padding: 22px; }
  .projects-grid { grid-template-columns: 1fr; }
  .cert-grid { grid-template-columns: repeat(2, 1fr); }
  .freelance-banner { flex-wrap: wrap; }
  .freelance-status { margin-left: 0; }
}

@media (max-width: 480px) {
  .hero-name { font-size: 1.8rem; }
  .hero-socials { flex-direction: column; width: 100%; }
  .cert-grid { grid-template-columns: 1fr 1fr; }
}
