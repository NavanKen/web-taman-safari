const button = document.querySelector(".tombol");
const navbar = document.querySelector(".nav-list");

button.addEventListener("click", () => {
  navbar.classList.toggle("aktif");
});

function copyToClipboard(elementId, iconElement) {
  const textToCopy = document.getElementById(elementId).innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      iconElement.classList.add("active");
      setTimeout(() => {
        iconElement.classList.remove("active");
      }, 500);
    })
    .catch((err) => {
      console.error("Gagal menyalin: ", err);
    });
}

const modalItems = document.querySelectorAll(".item-detail-button");

modalItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const targetModalId = item.getAttribute("data-target");
    const targetModal = document.querySelector(`#${targetModalId}`);

    targetModal.style.display = "flex";
  });
});

document.querySelectorAll(".close-icon").forEach((closeBtn) => {
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    closeBtn.closest(".modal").style.display = "none";
  });
});

window.onclick = (e) => {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};
