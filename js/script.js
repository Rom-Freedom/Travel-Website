let hamburger = document.querySelector('.ham')
let navlist = document.querySelector('.nav-list')
let links = document.querySelector('.nav-list li')



hamburger.addEventListener('click', function() {
    this.classList.toggle('click');
    navlist.classList.toggle('open');
})


