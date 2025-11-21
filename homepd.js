const space = document.getElementById("space");

if (space) {
  const starCount = 200;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    star.style.animationDelay = Math.random() * 3 + "s";
    space.appendChild(star);
  }

  setInterval(() => {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.left = Math.random() * 100 + "%";
    shootingStar.style.top = Math.random() * 50 + "%";
    space.appendChild(shootingStar);

    setTimeout(() => {
      shootingStar.remove();
    }, 3000);
  }, 3000);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
  setupInfiniteScroll(
    document.querySelector(".grid-column.left"),
    "scroll-down"
  );
  setupInfiniteScroll(
    document.querySelector(".grid-column.right"),
    "scroll-up"
  );
}

function startQuiz(category) {
  window.location.href = "pdquiz.html";
}

function setupInfiniteScroll(column, animationClass) {
  if (!column) {
    console.warn(`Elemen kolom untuk scroll tidak ditemukan.`);
    return;
  }

  column.innerHTML += column.innerHTML;

  column.classList.add(animationClass);
}
