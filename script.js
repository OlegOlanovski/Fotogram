let images = [
  "./img/barn.jpg",
  "./img/bell.jpg",
  "./img/boat.jpg",
  "./img/duck.jpg",
  "./img/forest.jpg",
  "./img/gana.jpg",
  "./img/grassland.jpg",
  "./img/lake.jpg",
  "./img/mala.jpg",
  "./img/prayer-wheels.jpg",
  "./img/river.jpg",
  "./img/theravada.jpg",
  "./img/tree.jpg",
  "./img/wheat.jpg",
  "./img/yak.jpg",
];

let alts = [
  "Barn",
  "Bell",
  "Boat",
  "Duck",
  "Forest",
  "Gana",
  "Grassland",
  "Lake",
  "Mala",
  "Prayer-Wheels",
  "River",
  "Theravada",
  "Tree",
  "Wheat",
  "Yak",
];

let currentIndex = 0;

function render() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    gallery.innerHTML += `<img 
        src="${images[i]}"
        alt="${alts[i]}"
        class="image_photo"
        onclick="zoomImg(${i})">`;
  }
}

function zoomImg(index) {
  let overlayRef = document.getElementById("overlay");
  let imgRef = document.getElementById("zoomedImg");
  currentIndex = index;
  imgRef.src = images[currentIndex];
  overlayRef.classList.remove("d_none");
}

function pressImg(direction) {
  currentIndex += direction;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  document.getElementById("zoomedImg").src = images[currentIndex];
}

function toggleOverlay() {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.toggle("d_none");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") pressImg(-1);

  if (e.key === "ArrowRight") pressImg(1);
});
const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === "") {
    this.click(); // toggleOverlay ()
    e.preventDefault(); // nicht scrollen
  }
});

function bubblingprotection(event) {
  event.stopPropagation();
}
