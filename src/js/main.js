var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 60,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500
    },
    speed: 1000

});
var swiper = new Swiper(".mySwipergallery", {
    loop: true,
    spaceBetween: 60,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-paginationgallery",
        dynamicBullets: true,
    },
});
