const btns = document.querySelectorAll(".question-btn")
const questionText = document.querySelector(".question-text")

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        question = e.currentTarget.parentElement.parentElement
        question.classList.toggle("show-text")
    })
})