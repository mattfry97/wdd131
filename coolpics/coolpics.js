const menuButton = document.getElementById("menuButton")
const nav = document.querySelector(".nav")

menuButton.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex"
})

const modal = document.getElementById("modal")
const modalImage = document.getElementById("modalImage")
const closeBtn = document.querySelector(".close")

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex"
    modalImage.src = "https://wddbyui.github.io/wdd131/images/norris-full.jpg"
  })
})

closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal()
})

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal()
})

function closeModal() {
  modal.style.display = "none"
}
