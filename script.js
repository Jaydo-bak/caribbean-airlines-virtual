const nav=document.querySelector("nav"), toggle=document.querySelector(".menu-toggle");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const counters=[["hours",18420],["flights",2367],["pilots",148]];
const animate=(el,end)=>{let start=0,step=Math.max(1,Math.ceil(end/60));const timer=setInterval(()=>{start=Math.min(end,start+step);el.textContent=start.toLocaleString();if(start>=end)clearInterval(timer)},18)};
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){counters.forEach(([id,n])=>animate(document.getElementById(id),n));observer.disconnect()}})},{threshold:.3});
observer.observe(document.querySelector(".quick-stats"));

document.querySelector(".filter").addEventListener("click",e=>{
  e.target.classList.toggle("active");
  const show=e.target.classList.contains("active");
  document.querySelectorAll(".route-card").forEach(card=>card.style.display=show?"block":"block");
});

// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("caribbean-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("caribbean-theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("caribbean-theme", "light");
  }
});
