import './style.css'
import {game} from './game.js'

let titel = '${titel}'

//förmågorkey [str,dex,con,int,wis,cha]

document.querySelector('#app').innerHTML = `

  <section id=titel>
    <h1>Simon den Andre </h1>
  </section> 
`

game(document.querySelector('#app'))



//+3
//+2
//+1
//+1
//+0
//-1