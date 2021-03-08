
//KeenSlider
let sliderElement = document.getElementById("news__slider")
let interval = 0
function autoplay(run) {
  clearInterval(interval)
  interval = setInterval(() => {
    if (run && slider) {
      slider.next()
    }
  }, 4000)
}

let slider = new KeenSlider("#news__slider", {
  loop: true,
  mode: "free-snap",
  slidesPerView: 3,
  spacing: 30,
  duration: 1000,
  dragStart: () => {
    autoplay(false)
  },
  dragEnd: () => {
    autoplay(true)
  },


    created: function (instance) {
      document
        .getElementById("arrow-left")
        .addEventListener("click", function () {
          instance.prev()
        })
  
      document
        .getElementById("arrow-right")
        .addEventListener("click", function () {
          instance.next()
        })

      let dots_wrapper = document.getElementById("news__slider-dots")
      let slides = document.querySelectorAll(".news__slide")
      slides.forEach(function (t, idx) {
        let dot = document.createElement("button")
        dot.classList.add("news__slider-dot")
        dots_wrapper.appendChild(dot)
        dot.addEventListener("click", function () {
          instance.moveToSlide(idx)
        })
      })
      updateClasses(instance)
    },
    slideChanged(instance) {
      updateClasses(instance)
    },
  })
  
  function updateClasses(instance) {
    let slide = instance.details().relativeSlide
    
    let dots = document.querySelectorAll(".news__slider-dot")
    dots.forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("news__slider-dot--active")
        : dot.classList.remove("news__slider-dot--active")
    })
  }

  sliderElement.addEventListener("mouseover", () => {
    autoplay(false)
  })
  sliderElement.addEventListener("mouseout", () => {
    autoplay(true)
  })
  autoplay(true)
  
  //END of KeenSlider