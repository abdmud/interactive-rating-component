const mainWindow = document.querySelector(".main")
const secondWindow = document.querySelector(".thank-you-div")
const submitBtn = document.querySelector(".submit-btn")
const rateAgainbtn = document.querySelector(".rate-again-btn")
const ratingBtn = document.querySelector(".btn")

submitBtn.addEventListener("click", () => {    
    secondWindow.classList.remove("hidden")
    mainWindow.style.display = "none"
})

rateAgainbtn.addEventListener("click", () => {
    secondWindow.style.display = "none"
    mainWindow.style.display = "block"
})