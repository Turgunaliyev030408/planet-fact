const img = document.getElementById("imges")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const about_planate = document.getElementById("about_planate")
 
button1.addEventListener("click", (e) => {
   button1.classList.add("mars")
   button2.classList.remove("mars")
   button3.classList.remove("mars")
    img.setAttribute("src", "../img/mars/planet-mars.svg")
    about_planate.textContent = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`
})


button2.addEventListener("click", (e) => {
    button2.classList.add("mars")
    button1.classList.remove("mars")
    button3.classList.remove("mars")
     img.setAttribute("src", "../img/mars/planet-mars-internal.svg")
     about_planate.textContent = `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`
 })


 button3.addEventListener("click", () => {
    button2.classList.remove("mars")
    button1.classList.remove("mars")
    button3.classList.add("mars")
     img.setAttribute("src", "../img/mars/geology-mars.png")
     about_planate.textContent =  `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt..`
 })