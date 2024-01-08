const img = document.getElementById("imges")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const about_planate = document.getElementById("about_planate")
 
button1.addEventListener("click", (e) => {
   button1.classList.add("earth")
   button2.classList.remove("earth")
    img.setAttribute("src", "../img/earth/planet-earth.svg")
    about_planate.textContent = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`
})


button2.addEventListener("click", (e) => {
    button2.classList.add("earth")
    button1.classList.remove("earth")
    button3.classList.remove("earth")
     img.setAttribute("src", "../img/earth/planet-earth-internal.svg")
     about_planate.textContent = `Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`
 })


 button3.addEventListener("click", () => {
    button2.classList.remove("earth")
    button1.classList.remove("earth")
    button3.classList.add("earth")
     img.setAttribute("src", "../img/earth/geology-earth.png")
     about_planate.textContent =  `The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.`
 })