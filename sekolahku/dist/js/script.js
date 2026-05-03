// =====================
// AUDIO PLAYER (FIX)
// =====================
const bgMusic = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

if (bgMusic && playBtn) {
  const icon = playBtn.querySelector("i");

  playBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      bgMusic.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  });
}



// =====================
// SCROLL UP BUTTON (FIX)
// =====================
const scrollBtn = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  if (scrollBtn) {
    scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
  }
});


// =====================
// SMOOTH SCROLL
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// =====================
// GALERI INTERAKTIF
// =====================
const photos = document.querySelectorAll(".siswa-photo img");

photos.forEach(photo => {
  photo.addEventListener("click", () => {
    photo.classList.toggle("zoom");
  });
});




const randomImg = document.getElementById("randomImage");
const randomBtn = document.getElementById("randomBtn");

const galleryImages = Array.from(
  document.querySelectorAll("#gallery-source img")
).map(img => img.src);

if (randomBtn && randomImg) {
  randomBtn.addEventListener("click", () => {
    randomImg.classList.add("fade");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * galleryImages.length);
      randomImg.src = galleryImages[randomIndex];
      randomImg.classList.remove("fade");
    }, 300);
  });
}
// =====================
// PARTICLES BACKGROUND
// =====================
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 100 },
      color: { value: ["#11ff00", "#f74125", "#b5179e"] },
      shape: { type: "circle" },
      opacity: { value: 0.6, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#4cf052",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2.5
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 150 },
        push: { particles_nb: 5 }
      }
    }
  });
}


AOS.init({
  once: true
});


