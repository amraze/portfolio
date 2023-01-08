// Button
var animateButton = function (e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName('bubbly-button');
for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

const aosAnimation = document.querySelectorAll('[data-aos]');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('aos-animate');
        } else {
            entry.target.classList.remove('aos-animate');
        }
    });
});
aosAnimation.forEach(aosObject => {
    observer.observe(aosObject);
});

function hideFirstTitle() {
    var year = $('.tl-year');
    year[0].style.display = 'none';
}

function hideSecondTitle() {
    var year = $('.tl-year');
    year[1].style.display = 'none';
}

function showFirstTitle() {
    var year = $('.tl-year');
    year[0].style.display = 'block';
}

function showSecondTitle() {
    var year = $('.tl-year');
    year[1].style.display = 'block';
}

function scrollToFooter() {
    $('.footer')[0].scrollIntoView();
}

var TimeLeftOnPage = 0;
var totalTime = 10000;

var w = window.innerWidth;
var i = 0;
setInterval(function () {
    TimeLeftOnPage = TimeLeftOnPage + 100;
    $('#progressbar').css('width', TimeLeftOnPage / (totalTime) * 100 + '%');
    if (TimeLeftOnPage == 10000) {
        TimeLeftOnPage = 0;
        i = i + 1;
        if (i <= 2) {
            var elements = $('.carousel-projects');
            const element = elements[i];
            if (w >= 1030) {
                element.parentElement.style.backgroundImage = "url('images/project-" + parseInt(i + 1) + "-bg.png')";
            }
            $('.carousel-projects').hide();
            element.style.display = 'block';
        }
        else {
            i = 0;
            var elements = $('.carousel-projects');
            const element = elements[i];
            if (w >= 1030) {
                element.parentElement.style.backgroundImage = "url('images/project-" + parseInt(i + 1) + "-bg.png')";
            }
            $('.carousel-projects').hide();
            element.style.display = 'block';
        }
    }
}, 100)

// AOS
AOS.init();