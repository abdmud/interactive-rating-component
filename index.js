const mainWindow = document.querySelector(".main")
const secondWindow = document.querySelector(".thank-you-div")
const submitBtn = document.querySelector(".submit-btn")
const rateAgainbtn = document.querySelector(".rate-again-btn")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () => {    
    secondWindow.classList.remove("hidden")
    mainWindow.style.display = "none"
})

rateAgainbtn.addEventListener("click", () => {
    secondWindow.classList.add("hidden")
    mainWindow.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})