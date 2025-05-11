let fixedBtn = document.getElementById('fixed');
let menuLi = document.querySelectorAll("#menu li");
let result = [...menuLi];
window.onscroll = function () {
    // functionality for the scroll to top button

        if (window.scrollY >= 100) {
            fixedBtn.style.opacity = 1;
        } else {
            fixedBtn.style.opacity = 0;
        }
    // ======================================================================================

    // functionality for the scroll to top links

    result.forEach((li) => {
        li.classList.remove("active");
    });
    if (window.scrollY >= 0 && window.scrollY < 700) {
        result[0].className = "active";
    } else if (window.scrollY >= 700 && window.scrollY < 1600) {
        result[1].className = "active";
    } else if (window.scrollY >= 1600 && window.scrollY < 2300) {
        result[2].className = "active";
    } else if (window.scrollY >= 2300 && window.scrollY < 3400) {
        result[3].className = "active";
    } else if (window.scrollY >= 3400 && window.scrollY < 4000) {
        result[4].className = "active";
    } else if (window.scrollY >= 4000) {
        result[5].className = "active";
    }
    // ======================================================================================
}
// functionality for skill span hover

let spans = document.querySelectorAll(".spanProg");

spans.forEach((ele) => {
    let value = ele.getAttribute("data-info");
    let spanvalue = document.createElement("span");
    spanvalue.className = "spanvalue";

    ele.addEventListener("mouseover", function () {
        spanvalue.textContent = value;
        ele.appendChild(spanvalue);
    });

    ele.addEventListener("mouseout", function () {
        if (ele.contains(spanvalue)) {
            ele.removeChild(spanvalue);
        }
    });
});
// ======================================================================================

// functionalty for the portfolio menu

let portfoliomenu = document.querySelectorAll("#portfolioMenu li button");
let all = document.querySelectorAll(".all");
let biggest = document.querySelectorAll(".biggest");
let best = document.querySelectorAll(".best");
let Trend = document.querySelectorAll(".Trend");
let Books = document.querySelectorAll(".books");

// restore the active state from sessionStorage
const savedIndex = sessionStorage.getItem("portfolioMenuActive");
if (savedIndex !== null && portfoliomenu[savedIndex]) {
    portfoliomenu.forEach((ele) => ele.classList.remove("active"));
    portfoliomenu[savedIndex].classList.add("active");
    // Show the corresponding portfolio items
    all.forEach((ele) => {
        ele.style.display = "none";
    });
    if (savedIndex == 0) {
        all.forEach((ele) => {
            ele.style.display = "block";
        });
    } else if (savedIndex == 1) {
        biggest.forEach((ele) => {
            ele.style.display = "block";
        });
    } else if (savedIndex == 2) {
        best.forEach((ele) => {
            ele.style.display = "block";
        });
    } else if (savedIndex == 3) {
        Trend.forEach((ele) => {
            ele.style.display = "block";
        });
    } else if (savedIndex == 4) {
        Books.forEach((ele) => {
            ele.style.display = "block";
        });
    }
}

portfoliomenu.forEach((ele , i) => {
    ele.addEventListener("click", function () {
        portfoliomenu.forEach((ele) => {
            ele.classList.remove("active");
        });
        this.classList.add("active");
        sessionStorage.setItem("portfolioMenuActive", i);
        // Show the corresponding portfolio items
        all.forEach((ele) => {
            ele.style.display = "none";
        });
        if (i == 0) {
            all.forEach((ele) => {
                ele.style.display = "block";
            });
        } else if (i == 1) {
            biggest.forEach((ele) => {
                ele.style.display = "block";
            });
        } else if (i == 2) {
            best.forEach((ele) => {
                ele.style.display = "block";
            });
        } else if (i == 3) {
            Trend.forEach((ele) => {
                ele.style.display = "block";
            });
        } else if (i == 4) {
            Books.forEach((ele) => {
                ele.style.display = "block";
            });
        }
    });
});
// ======================================================================================

// functionality of swiper

const swiper = new Swiper('.rotat', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    centerSlides: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        520: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 768px
        950: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});
// ======================================================================================

// functionalty of span data

let spanData = document.querySelectorAll(".spandata");
function showSpanData() {
    spanData.forEach((ele) => {
        let startValue = parseInt(ele.textContent);
        let endValue = parseInt(ele.getAttribute("data-value"));
        let counter = setInterval(() => {
            if (startValue < endValue) {
                startValue++;
                ele.textContent = startValue;
            } else {
                clearInterval(counter);
            }
        }, 20);
    });
}
window.onload = setTimeout(() => {
    showSpanData();
}, 2000);
// ======================================================================================