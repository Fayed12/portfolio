
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
