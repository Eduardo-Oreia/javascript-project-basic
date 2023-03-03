const nameColor = document.querySelector(".color-name")
const btnColor = document.getElementById("button-color")
const color = ["red", "blue", "yellow", "pink", "green", "orange"]

btnColor.addEventListener("click", () => {
    const numRandom  =  Math.floor(Math.random() * color.length)
    
    document.body.style.background = color[numRandom]

    nameColor.innerHTML = color[numRandom]

    // console.log(numRandom)
})
