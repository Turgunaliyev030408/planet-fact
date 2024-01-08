const img = document.getElementById("imges")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const about_planate = document.getElementById("about_planate")
 
button1.addEventListener("click", (e) => {
   button1.classList.add("saturn")
   button2.classList.remove("saturn")
   button3.classList.remove("saturn")
    img.setAttribute("src", "../img/saturn/planet-saturn.svg")
    about_planate.textContent = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`
})


button2.addEventListener("click", (e) => {
    button2.classList.add("saturn")
    button1.classList.remove("saturn")
    button3.classList.remove("saturn")
     img.setAttribute("src", "../img/saturn/planet-saturn-internal.svg")
     about_planate.textContent = `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`
 })


 button3.addEventListener("click", () => {
    button2.classList.remove("saturn")
    button1.classList.remove("saturn")
    button3.classList.add("saturn")
     img.setAttribute("src", "../img/saturn/geology-saturn.png")
     about_planate.textContent =  `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. `
 })