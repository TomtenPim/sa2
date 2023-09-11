

    let textarray = ["Felaktigt svar", "Vilken av följande attribut har Simon mest av?", "Vilken av följande attribut har Simon näst mest av?", "Slut" ]
    let textchoicearray = [ ,"1.Styrka, 2.Smidighet, 3.Tålighet, 4.Intelligens, 5.Visdom, 6.Karisma", "1.Styrka, 2.Smidighet, 3.Tålighet, 4.a, 5.Visdom, 6.Karisma","Tack för testet"]

    let story = {
        "story": [
            {
                "id": 0,
                "description": "",
                "options": [
                    {
                        "text": "Start",
                        "target": 1
                    }
                ]
            },
            {
                "id": 1,
                "description": "Vill du äta mat eller dricka mat",
                "options": [
                    {
                        "text": "Äta",
                        "target": 2
                    },
                    {
                        "text": "Dricka",
                        "target": 3
                    }
                ]
            },
            {
                "id": 2,
                "description": "Du åt maten",
                "options": [
                    {
                        "text": "Till start",
                        "target": 1
                    },
                ]
            },
            {
                "id": 3,
                "description": "Du drack maten",
                "options": [
                    {
                        "text": "Till start",
                        "target": 1
                    },
                ]
            }
        ]
    }

export function run (element) {
        console.log(story.story)
        story.story.forEach((part) =>{
            console.log(part)
            let p = document.createElement("p")
            p.innerText = part.description
            element.appendChild(p)
            part.options.forEach((option) =>{
                let button = document.createElement("button")
                button.innerText = option.text
                button.addEventListener("click", () => {
                    run(element, option.target)
                })
                element.appendChild(button)
            })
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
