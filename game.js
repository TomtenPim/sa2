import json from './story.json'


let textarray = ["Felaktigt svar", "Vilken av följande attribut har Simon mest av?", "Vilken av följande attribut har Simon näst mest av?", "Slut"]
let textchoicearray = [, "1.Styrka, 2.Smidighet, 3.Tålighet, 4.Intelligens, 5.Visdom, 6.Karisma", "1.Styrka, 2.Smidighet, 3.Tålighet, 4.a, 5.Visdom, 6.Karisma", "Tack för testet"]



export function game (element, position = 0) {
    element.innerHTML = ""

    let story = json[position]

    let p = document.createElement("p")
    p.innerText = story.description
    element.appendChild(p)

    story.options.forEach((option) =>{
        let button = document.createElement("button")
        button.innerText = option.text
        button.addEventListener("click", () => {
            game(element, option.target)
        })
        element.appendChild(button)
    })
    
}

function roll(atributes) {
    let result = Math.floor(Math.random() * 20) + 1 + atributes
    return result
}

/*
function text(id) {
    const storylist = element.querySelector('#storylist')
    const li = document.createElement('li')

    
    if(firsttext == true){
        li.textContent = textarray[id]
        firsttext = false
        
    }
    else{
        li.textContent = textchoicearray[id]
        firsttext=true
    }
    storylist.appendChild(li)
}

function choice(answer, goto) {
    canClick = true
    if (answer) {

    }
    event(goto[answer - 1])
}

function event(id) {

    console.log(id)
    text(id)
    text(id)
    canClick = true

    if (canClick = true) {
        send.addEventListener('click', (e) => {

            const answer = parseInt(element.querySelector('#answer').value)
            e.preventDefault
            canClick = false

            if (answer <= choicearray[id] && answer >= 1) {
                choice(answer, gotoarray[id])
                console.log("Ett korrekt angivet svar")
            } else {
                text(0)

                firsttext = true
                canClick = true
            }
            element.querySelector('#answer').value = ""
        })
    }
}

*/
