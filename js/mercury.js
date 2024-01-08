const img = document.getElementById("imges")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const about_planate = document.getElementById("about_planate")
 
button1.addEventListener("click", (e) => {
   button1.classList.add("mercury")
   button2.classList.remove("mercury")
    img.setAttribute("src", "../img/mercry/mercury.png")
    about_planate.textContent = `Mercury is the smallest planet in the Solar System and the closest
    to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
    shortest of all the Sun's planets. Mercury is one of four
    terrestrial planets in the Solar System, and is a rocky body like
    Earth.`
})


button2.addEventListener("click", (e) => {
    button2.classList.add("mercury")
    button1.classList.remove("mercury")
    button3.classList.remove("mercury")
     img.setAttribute("src", "../img/mercry/mercury-yadro.svg")
     about_planate.textContent = `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`
 })


 button3.addEventListener("click", () => {
    button2.classList.remove("mercury")
    button1.classList.remove("mercury")
    button3.classList.add("mercury")
     img.setAttribute("src", "../img/mercry/mercury-geology.png")
     about_planate.textContent =  `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.`
 })