const readMore = document.querySelector(".read-more");

console.log("hi");
readMore.addEventListener("click", () => {
    readMore.classList.toggle("active");
})