var navbar = document.querySelector(".navbar");

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("scrolled") : navbar.classList.remove("scrolled");
}