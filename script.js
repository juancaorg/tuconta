const modal = document.querySelector(".main__modal");
const backdrop = document.querySelector(".main__backdrop");
const packagesButton = document.querySelector(".main__cta--packages");

function openModal() {
  modal.classList.remove("hidden");
  backdrop.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  backdrop.classList.add("hidden");
}

packagesButton.addEventListener("click", openModal);
backdrop.addEventListener("click", closeModal);
