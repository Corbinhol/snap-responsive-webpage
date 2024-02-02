document.getElementById("features-button").addEventListener("click", ()=> {
    document.getElementById("features-list").classList.toggle("active");
    document.getElementById("features-arrow").classList.toggle("flip");
})

document.getElementById("company-button").addEventListener("click", ()=> {
    document.getElementById("company-list").classList.toggle("active");
    document.getElementById("company-arrow").classList.toggle("flip");
})

document.getElementById("hamburger").addEventListener("click", ()=> {
    document.getElementById("nav-popup").classList.toggle("active");
    document.getElementById("dark-cover").classList.toggle("active");
})

document.getElementById("mobile-menu-close").addEventListener("click", ()=> {
    document.getElementById("nav-popup").classList.toggle("active");
    document.getElementById("dark-cover").classList.toggle("active");
})

document.getElementById("dark-cover").addEventListener("click", ()=> {
    document.getElementById("nav-popup").classList.toggle("active");
    document.getElementById("dark-cover").classList.toggle("active");
})

// document.getElementById("desktop-company-button").addEventListener("mouseover", ()=> {
//     console.log("Working")
//     document.getElementById("desktop-company-list").classList.add("active")
// })

// document.getElementById("desktop-company-list").addEventListener("mouseover", ()=> {
//     document.getElementById("desktop-company-list").classList.add("active")
// })

// document.getElementById("desktop-company-list").addEventListener("mouseover", ()=> {
//     document.getElementById("desktop-company-list").classList.add("active")
// })

// document.getElementById("desktop-company-button").addEventListener("mouseleave", ()=> {
//     document.getElementById("desktop-company-list").classList.remove("active")
// })