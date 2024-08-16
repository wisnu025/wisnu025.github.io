// window.addEventListener ("scroll",function() {
// let header = document.querySelector(".header");
// header.classList.toggle("sticky", window.scrollY > 0);
// });
document.addEventListener('scroll', function() {
    const headers = document.getElementsByClassName('header');
    if (headers.length > 0) {
        const header = headers[0];
        if (window.scrollY > 100) {  // Adjust scroll position as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});
