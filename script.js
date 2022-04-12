const openAnswers = document.querySelectorAll(".open-answer")
const answer = document.querySelectorAll(".answer")
const containerQuestions = document.querySelectorAll(".container-questions")




function showAnswers(target){
    let targetNumber = target.classList[1]
    let closeBtn = ocultButton()

    target.parentElement.parentElement.childNodes[3].style.display = "block"

    target.style.display = "none"

    containerQuestions[targetNumber - 1].appendChild(closeBtn)


}

function closeAnswers(target){
    
    target.parentElement.parentElement.childNodes[3].style.display = "none"

    target.parentElement.childNodes[3].style.display = "block"


    target.style.display = "none"

    
}

function ocultButton(){
    let div = document.createElement("div")
    div.setAttribute("class", `close-answer`)

    div.setAttribute("onclick", "closeAnswers(this)")
    div.textContent = "-"
    return div
}
 