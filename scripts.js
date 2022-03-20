let items = document.querySelectorAll('#ffSlides .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//sticky-nav

window.onscroll = function () { myFunction() }

let navbar = document.getElementById("navbar")
let sticky = navbar.offsetTop

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    document.getElementById("navLogo").setAttribute("src", "./images/logosticky.svg")
  } else {
    navbar.classList.remove("sticky");
  }
}
