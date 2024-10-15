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
