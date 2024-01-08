const img = document.getElementById("imges")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const about_planate = document.getElementById("about_planate")
 
button1.addEventListener("click", (e) => {
   button1.classList.add("neptune")
   button2.classList.remove("neptune")
   button3.classList.remove("neptune")
    img.setAttribute("src", "../img/uranus/planet-uranus.svg")
    about_planate.textContent = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`
})


button2.addEventListener("click", (e) => {
    button2.classList.add("neptune")
    button1.classList.remove("neptune")
    button3.classList.remove("neptune")
     img.setAttribute("src", "../img/uranus/planet-uranus-internal.svg")
     about_planate.textContent = `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`
 })


 button3.addEventListener("click", () => {
    button2.classList.remove("neptune")
    button1.classList.remove("neptune")
    button3.classList.add("neptune  ")
     img.setAttribute("src", "../img/uranus/geology-uranus.png")
     about_planate.textContent =  `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`
 })