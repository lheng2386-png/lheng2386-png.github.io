const typebox = document.getElementById("typebox");

const bootLines = [
  "insert coin",
  "open ethan_lee_study_desk",
  "checking unfinished_notes...",
  "loading code_island...",
  "loading algorithm_notes...",
  "loading modeling_folder...",
  "loading sdn_p4_log...",
  "commit small progress...",
  "python main.py --keep-building"
];

let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typebox) return;

  const current = bootLines[lineIndex];

  if (!deleting) {
    typebox.innerHTML = '<span>&gt;</span> ' + current.slice(0, charIndex);
    charIndex++;

    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    typebox.innerHTML = '<span>&gt;</span> ' + current.slice(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % bootLines.length;
      charIndex = 0;
    }
  }

  setTimeout(typeLoop, deleting ? 32 : 68);
}

typeLoop();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

const colors = [
  "#ff4fd8",
  "#9b6dff",
  "#4d7cff",
  "#2ce5ff",
  "#71ffb0",
  "#ffe169",
  "#ffab57"
];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  stars = Array.from({ length: Math.min(145, Math.floor(window.innerWidth / 9)) }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.5,
    c: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    a: Math.random() * 0.55 + 0.22
  }));
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((s) => {
    s.x += s.vx;
    s.y += s.vy;

    if (s.x < 0) s.x = canvas.width;
    if (s.x > canvas.width) s.x = 0;
    if (s.y < 0) s.y = canvas.height;
    if (s.y > canvas.height) s.y = 0;

    ctx.globalAlpha = s.a;
    ctx.fillStyle = s.c;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.globalAlpha = 1;
  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawStars();
