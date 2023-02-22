let arrows = document.querySelectorAll(".arrow")
let answers = document.querySelectorAll(".main_answer")
let question = document.querySelectorAll(".question")
let rows = document.querySelectorAll(".row")



arrows.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("rotation")
        element.parentElement.nextElementSibling.classList.toggle("active")
        element.previousElementSibling.classList.toggle("opened")
    })
})