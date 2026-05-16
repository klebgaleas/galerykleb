const photos = [
  // Para cambiar una foto:
  // 1. Pon tu imagen dentro de la carpeta images/
  // 2. Cambia src por el nombre de tu archivo
  // 3. Cambia title, category, description y orientation
  //
  // orientation puede ser:
  // "landscape" = horizontal
  // "portrait" = vertical
  // "square" = cuadrada
  {
    id: "hojas",
    title: "LEAVES",
    category: "b/n",
    description: "",
    src: "images/hojas.jpeg",
    orientation: "portrait",
  },
  {
    id: "faro",
    title: "STREET",
    category: "Dark",
    description: "",
    src: "images/faro.jpeg",
    orientation: "portrait",
  },
  {
    id: "arbol",
    title: "HERE COMES THE SUN",
    category: "Colours",
    description: "Arbolito en ing.",
    src: "images/arbol.jpeg",
    orientation: "landscape",
  },
  {
    id: "montana-niebla",
    title: "Montana con niebla",
    category: "Naturaleza",
    description: "Capas de montana cubiertas por niebla de primera hora.",
    src: "images/montana-niebla.svg",
    orientation: "landscape",
  },
];

const gallery = document.querySelector("#gallery");
const dialog = document.querySelector("#photoDialog");
const closeDialog = document.querySelector("#closeDialog");
const expandPhoto = document.querySelector("#expandPhoto");
const prevPhoto = document.querySelector("#prevPhoto");
const nextPhoto = document.querySelector("#nextPhoto");
const dialogImage = document.querySelector("#dialogImage");
const dialogCategory = document.querySelector("#dialogCategory");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogDescription = document.querySelector("#dialogDescription");
let activePhotoIndex = 0;
let captionTimer = null;

renderGallery();

closeDialog.addEventListener("click", () => dialog.close());
expandPhoto.addEventListener("click", toggleExpandedViewer);
prevPhoto.addEventListener("click", () => showPhotoByOffset(-1));
nextPhoto.addEventListener("click", () => showPhotoByOffset(1));

document.addEventListener("keydown", (event) => {
  if (!dialog.open) return;
  if (event.key === "Escape" && dialog.classList.contains("dialog-fullscreen")) {
    event.preventDefault();
    setExpandedViewer(false);
  }
  if (event.key === "ArrowLeft") showPhotoByOffset(-1);
  if (event.key === "ArrowRight") showPhotoByOffset(1);
});

dialog.addEventListener("mousemove", () => {
  if (!dialog.classList.contains("dialog-fullscreen")) return;
  showTemporaryCaption();
});

dialog.addEventListener("close", () => {
  setExpandedViewer(false);
});

function renderGallery() {
  const visiblePhotos = photos;
  gallery.innerHTML = "";

  visiblePhotos.forEach((photo) => {
    const card = document.createElement("button");
    card.className = `photo-card photo-card-${photo.orientation || "portrait"}`;
    card.type = "button";
    card.innerHTML = `
      <img src="${photo.src}" alt="${escapeHtml(photo.title)}" loading="lazy">
      <span class="photo-info">
        <span>${escapeHtml(photo.category)}</span>
        <strong>${escapeHtml(photo.title)}</strong>
        <small>${escapeHtml(photo.description)}</small>
      </span>
    `;
    const image = card.querySelector("img");
    image.addEventListener("load", () => applyRealOrientation(card, image));
    if (image.complete) {
      applyRealOrientation(card, image);
    }
    card.addEventListener("click", () => openPhoto(photo));
    gallery.append(card);
  });
}

function applyRealOrientation(card, image) {
  const orientation = image.naturalWidth > image.naturalHeight ? "landscape" : "portrait";
  card.classList.remove("photo-card-landscape", "photo-card-portrait", "photo-card-square");
  card.classList.add(`photo-card-${orientation}`);
}

function openPhoto(photo) {
  activePhotoIndex = photos.findIndex((item) => item.id === photo.id);
  updateDialogPhoto(photo);
  setExpandedViewer(false);
  dialog.showModal();
}

function showPhotoByOffset(offset) {
  activePhotoIndex = (activePhotoIndex + offset + photos.length) % photos.length;
  updateDialogPhoto(photos[activePhotoIndex]);
}

function updateDialogPhoto(photo) {
  dialogImage.src = photo.src;
  dialogImage.alt = photo.title;
  dialog.style.setProperty("--active-photo", `url("${photo.src}")`);
  dialog.classList.remove("dialog-photo-landscape", "dialog-photo-portrait");
  dialog.classList.add(`dialog-photo-${photo.orientation || "portrait"}`);
  dialogCategory.textContent = photo.category;
  dialogTitle.textContent = photo.title;
  dialogDescription.textContent = photo.description;
}

function toggleExpandedViewer() {
  setExpandedViewer(!dialog.classList.contains("dialog-fullscreen"));
}

function setExpandedViewer(isExpanded) {
  dialog.classList.toggle("dialog-fullscreen", isExpanded);
  document.body.classList.toggle("viewer-open", isExpanded);
  expandPhoto.innerHTML = isExpanded ? "&minus;" : "▭";
  expandPhoto.setAttribute("aria-label", isExpanded ? "Reducir imagen" : "Expandir imagen");

  if (isExpanded) {
    showTemporaryCaption();
    return;
  }

  dialog.classList.remove("caption-visible");

  if (captionTimer) {
    clearTimeout(captionTimer);
    captionTimer = null;
  }
}

function showTemporaryCaption() {
  dialog.classList.add("caption-visible");

  if (captionTimer) {
    clearTimeout(captionTimer);
  }

  captionTimer = setTimeout(() => {
    dialog.classList.remove("caption-visible");
  }, 1800);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
