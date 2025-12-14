const thumbnails = Array.from(document.querySelectorAll(".gallery-img"));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxThumbs = document.getElementById("lightboxThumbs");

const btnClose = document.getElementById("lightboxClose");
const btnPrev = document.getElementById("lightboxPrev");
const btnNext = document.getElementById("lightboxNext");

let currentIndex = 0;

function setActiveThumb() {
  const thumbImgs = lightboxThumbs.querySelectorAll("img");
  thumbImgs.forEach((t, i) => t.classList.toggle("active", i === currentIndex));
}

function showImage(index) {
  currentIndex = index;

  const img = thumbnails[currentIndex];
  const fullSrc = img.getAttribute("data-full") || img.src;

  lightboxImg.src = fullSrc;
  lightboxImg.alt = img.alt || "Expanded image";
  lightboxCaption.textContent = img.alt || "";

  setActiveThumb();
}

function openLightbox(index) {
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  showImage(index);
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

function showPrev() {
  const nextIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  showImage(nextIndex);
}

function showNext() {
  const nextIndex = (currentIndex + 1) % thumbnails.length;
  showImage(nextIndex);
}

// Build thumbnail strip inside modal
function buildThumbStrip() {
  lightboxThumbs.innerHTML = "";
  thumbnails.forEach((img, index) => {
    const t = document.createElement("img");
    t.src = img.src;               // use the small image as thumb
    t.alt = img.alt || `Image ${index + 1}`;
    t.addEventListener("click", () => showImage(index));
    lightboxThumbs.appendChild(t);
  });
}

buildThumbStrip();

// Click thumbnails in the page to open modal
thumbnails.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

// Controls
btnClose.addEventListener("click", closeLightbox);
btnPrev.addEventListener("click", showPrev);
btnNext.addEventListener("click", showNext);

// Click outside image closes
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});
