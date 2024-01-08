const img = document.getElementById("imges")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const about_planate = document.getElementById("about_planate")
 
button1.addEventListener("click", (e) => {
   button1.classList.add("jupiter")
   button2.classList.remove("jupiter")
   button3.classList.remove("jupiter")
    img.setAttribute("src", "../img/jupiter/planet-jupiter.svg")
    about_planate.textContent = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`
})


button2.addEventListener("click", (e) => {
    button2.classList.add("jupiter")
    button1.classList.remove("jupiter")
    button3.classList.remove("jupiter")
     img.setAttribute("src", "../img/jupiter/planet-jupiter-internal.svg")
     about_planate.textContent = `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`
 })


 button3.addEventListener("click", () => {
    button2.classList.remove("jupiter")
    button1.classList.remove("jupiter")
    button3.classList.add("jupiter")
     img.setAttribute("src", "../img/jupiter/geology-jupiter.png")
     about_planate.textContent =  `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`
 })