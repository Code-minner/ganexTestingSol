function toggleNavBar() {
  var bar = document.querySelector('.bar');
  var navBar = document.getElementById("navbar")


  bar.classList.toggle('roller');
  bar.classList.toggle('active');
  navBar.classList.toggle("navigation")
}



document.addEventListener("DOMContentLoaded", ShadowScroller);

function ShadowScroller() {
    // Navbar shadowHeader Scroller Section //
    const shadowHeader = document.querySelector("header");
  
    window.addEventListener("scroll", () => {
      const isScrolled = window.scrollY > 300;
      
      shadowHeader.classList.toggle("shadow", isScrolled);
    });
  }



  gsap.to(".box", {
    scrollTrigger: { 
      trigger: ".right",
      start: "top 0%", 
      end: "bottom 10%", 
      scrub: 1  
    }, 
    x: -1000  
  });

  gsap.to(".bulb", {
    scrollTrigger: { 
      trigger: ".right",
      start: "top 0%", 
      end: "bottom 10%", 
      scrub: 1 
    }, 
    x: 1000  
  });

  gsap.to(".bulb4", {
    scrollTrigger: { 
      trigger: ".right",
      start: "top 0%", 
      end: "bottom 10%", 
      scrub: 1  
    }, 
    y: 1000  
  });

  gsap.to(".bulb3", {
    scrollTrigger: { 
      trigger: ".right",
      start: "top 0%", 
      end: "bottom 10%", 
      scrub: 1  
    }, 
    y: 1000  ,
    x: -1500  
  });

  gsap.to(".right", {
    scrollTrigger: { 
      trigger: ".right",
      start: "top 10%", 
      end: "bottom 10%", 
      scrub: 1  
    }, 
    x: 500  
  });

  var classer = document.querySelectorAll(".content_three_sub_line")

  gsap.to(".sec4", {
    scrollTrigger: { 
      trigger: ".sec4",
      start: "top 10%", 
      end: "bottom 10%", 
      scrub: 1  
    }, 

  });





  const dynamicText = document.getElementById("headchange")

const words = ["Digital Success", "Good Equipment" ];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex)
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop_blinking")

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200); 
    }
    else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 150);
    }
    else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop_blinking")
        wordIndex = !isDeleting ? (wordIndex+ 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1400);
    }

}

typeEffect()



document.addEventListener('DOMContentLoaded', function () {
  const cardSwiper = new Swiper('.card_swiper', {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    spaceBetween: 26,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      620: {
        slidesPerView: 2,
      },
      980: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },

    },
  });
});
