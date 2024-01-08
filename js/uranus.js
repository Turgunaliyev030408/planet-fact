const img = document.getElementById("imges")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const about_planate = document.getElementById("about_planate")
 
button1.addEventListener("click", (e) => {
   button1.classList.add("uranus")
   button2.classList.remove("uranus")
   button3.classList.remove("uranus")
    img.setAttribute("src", "../img/uranus/planet-uranus.svg")
    about_planate.textContent = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`
})


button2.addEventListener("click", (e) => {
    button2.classList.add("uranus")
    button1.classList.remove("uranus")
    button3.classList.remove("uranus")
     img.setAttribute("src", "../img/uranus/planet-uranus-internal.svg")
     about_planate.textContent = `The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.`
 })


 button3.addEventListener("click", () => {
    button2.classList.remove("uranus")
    button1.classList.remove("uranus")
    button3.classList.add("uranus")
     img.setAttribute("src", "../img/uranus/geology-uranus.png")
     about_planate.textContent =  `The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere. `
 })