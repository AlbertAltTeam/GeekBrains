document.addEventListener("DOMContentLoaded", function () {

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

    const searchIcon = document.querySelector('#searchIcon');
    const searchInput = document.querySelector('.search-input');
    searchIcon.addEventListener('click', function (event) {
        searchInput.classList.toggle('active');
    });
    searchInput.addEventListener('click', function (event) {
        searchInput.classList.add('active');
    });

    const cartLink = document.getElementById('cartLink');

    cartLink.addEventListener('click', scrollToCISection);

    function scrollToCISection() {
        const ciSection = document.querySelector('.ci-section');
        ciSection.scrollIntoView({ behavior: 'smooth' });
    }
});

