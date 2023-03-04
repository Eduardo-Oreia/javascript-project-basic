const reviews = [
    {
        id: 1,
        name: "Fallen",
        job: "awper(igl)",
        img: src="./img/fallen.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed ad similique quaerat molestias consectetur"
    },
    {
        id: 2,
        name: "Fer",
        job: "Rifler Goat Star Player",
        img: src="./img/fer.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed ad similique quaerat molestias consectetur"
    },
    {
        id: 3,
        name: "Chelo",
        job: "Star Player",
        img: src="./img/chelo.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed ad similique quaerat molestias consectetur"
    },
    {
        id: 4,
        name: "Boltz",
        job: "Rifler",
        img: src="./img/boltz.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed ad similique quaerat molestias consectetur"
    },
    {
        id: 5,
        name: "vini",
        job: "Rifler",
        img: src="./img/vini.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed ad similique quaerat molestias consectetur"
    },
    {
        id: 6,
        name: "S1mple",
        job: "GOAT",
        img: src="./img/simple.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed ad similique quaerat molestias consectetur"
    },

];

const img = document.getElementById("person-image")
const author = document.getElementById("person")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".btn-previous")
const nextBtn = document.querySelector(".btn-next")

let currentItem = 0

window.addEventListener("DOMContentLoaded", () =>{
    switchPerson()
    showPerson(currentItem)
})


function showPerson(person){
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

function switchPerson(){
    
    nextBtn.addEventListener("click", () =>{
        currentItem++
        if( currentItem > reviews.length - 1){
            currentItem = 0
        }
        showPerson(currentItem)
        console.log(currentItem)

    })

    prevBtn.addEventListener("click", () =>{
        currentItem--
        if(currentItem < 0 ){
            currentItem = reviews.length - 1
        }
        showPerson(currentItem)
        console.log(currentItem)
    })

}

