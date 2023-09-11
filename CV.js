import './style.css'

document.querySelector('#app').innerHTML = `
  <section id=titel>
    <h1>Simon Mikael Ågren</h1>
  
    <div id=phoneNumber>
      <p>+4673 073 85 80</p>
    </div>
    <div id=email>
      <p>Tomtenpim@gmail.com</p>
    </div>
  </section> 

  <section>
    <h2> Introduktion</h2>
    <p> Hej och välkommen till mitt digitala CV. I detta <p>
  </section>
  
  <section id=utbildning>
    <h2>Utbildning</h2>
  </section>

  <section id=arbetserfarenhet>
  <h2>Arbetserfarenhet</h2>
</section>

  <section id=färdigheter>
    <h2>Färdigheter</h2>
  </section>

  <section id=projekt>
  <h2>Projekt</h2>
  </section>

  <section id=omMig>
  <h2>Om Mig</h2>
  </section> 
`

setupCounter(document.querySelector('#counter'))
