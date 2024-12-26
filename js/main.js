function activeSearchInput() {
    const input = document.querySelector('.header_wrapper-nav--search')
    const button = document.querySelector('[data-searchButton="searchButton"]');

    button.addEventListener('click', function () {
        input.classList.toggle('openSearchInput')
        console.log(1);

    })
}

activeSearchInput()

function openMobileMenu() {
    const button = document.querySelector('.header_wrapper-mobileButton')
    const menu = document.querySelector('.header_wrapper-nav')

    button.addEventListener('click', function () {
        menu.classList.toggle('openNav')
    })

}

openMobileMenu()

function animateMobileMenuButton() {
    const button = document.querySelector('.header_wrapper-mobileButton')

    button.addEventListener('click', function () {
        button.classList.toggle('active');
    })

}

animateMobileMenuButton()