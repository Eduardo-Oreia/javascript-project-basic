const btnModal = document.querySelector(".btn-modal")
const btnClose = document.querySelector(".close-modal")
const modal = document.querySelector(".overlay-modal")

btnModal.addEventListener("click", () =>{
    modal.classList.add("open-modal")
})

btnClose.addEventListener("click", () =>{
    modal.classList.remove("open-modal")
})