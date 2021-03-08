
//KeenSlider

let headerSlider = new KeenSlider("#header__slider", {

    created: function (instance) {
      let dots_wrapper = document.getElementById("header__slider-dots")
      let slides = document.querySelectorAll(".header__slide")
      slides.forEach(function (t, idx) {
        let dot = document.createElement("button")
        dot.classList.add("header__slider-dot")
        dots_wrapper.appendChild(dot)
        dot.addEventListener("click", function () {
          instance.moveToSlide(idx)
        })
      })
      updateHeaderClasses(instance)
    },
    slideChanged(instance) {
      updateHeaderClasses(instance)
    },
  })
  
  function updateHeaderClasses(instance) {
    let slide = instance.details().relativeSlide
    let dots = document.querySelectorAll(".header__slider-dot")
    console.log(dots);
    dots.forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("header__slider-dot--active")
        : dot.classList.remove("header__slider-dot--active")
    })
  }

  //END of KeenSlider

//slideIntoView
function slideIntoView(id) {
  let section = document.getElementById(id);
  section.scrollIntoView();
}
//END slideIntoView