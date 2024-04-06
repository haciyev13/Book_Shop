let btnMenu = document.querySelector(".btn-menu")
let btnMenuIcon = document.querySelector(".btn-menu span")
let sectionNavbar = document.querySelector(".navbar")


btnMenu.addEventListener("click", function () {
     if (sectionNavbar.classList.contains('active')) {
          sectionNavbar.classList.remove("active")
          btnMenuIcon.style.transform = 'rotate(90deg)'
     } else {
          sectionNavbar.classList.add("active")
          btnMenuIcon.style.transform = 'rotate(270deg)'
     }
})

// console.log($("#seller-arrow "));

$('.slider__content').slick({
     dots: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1
});

$('#seller__slick').slick({
     nextArrow: $('#seller-arrow'),
     prevArrow: $('#seller-arrow1'),
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows: true,
});

$('.testiomonials__card').slick({
     nextArrow: $('.testiomonials__arrow-left'),
     prevArrow: $('.testiomonials__arrow-right'),
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: true,
});
$('#top-book').slick({
     nextArrow: $('#top-book-next'),
     prevArrow: $('#top-book-prev'),
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: true,
});
$('#featured').slick({
     nextArrow: $('#featured-next'),
     prevArrow: $('#featured-prev'),
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
});

$('.sale__list').slick({
     nextArrow: $('#sale__list-next'),
     prevArrow: $('#sale__list-prev'),
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
});



