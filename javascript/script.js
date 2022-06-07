console.log("hello there");
const cards = document.querySelectorAll("audio");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("autoplay", entry.isIntersecting);
  });
});
observer.observe(cards[0]);
