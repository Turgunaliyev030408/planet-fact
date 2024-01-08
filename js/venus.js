const img = document.getElementById("imges")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const about_planate = document.getElementById("about_planate")
 
button1.addEventListener("click", (e) => {
   button1.classList.add("venus")
   button2.classList.remove("venus")
    img.setAttribute("src", "../img/venus/planet-venus.svg")
    about_planate.textContent = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`
})


button2.addEventListener("click", (e) => {
    button2.classList.add("venus")
    button1.classList.remove("venus")
    button3.classList.remove("venus")
     img.setAttribute("src", "../img/venus/planet-venus-internal.svg")
     about_planate.textContent = `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`
 })


 button3.addEventListener("click", () => {
    button2.classList.remove("venus")
    button1.classList.remove("venus")
    button3.classList.add("venus")
     img.setAttribute("src", "../img/venus/geology-venus.png")
     about_planate.textContent =  `Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.`
 })