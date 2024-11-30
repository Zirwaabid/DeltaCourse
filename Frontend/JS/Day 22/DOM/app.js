let smallImages = document.getElementsByClassName("logo");
for (let i = 0; i < smallImages.length; i++) {
    console.dir(smallImages[i]);
}

let links = document.querySelectorAll(".footer a");
console.dir(links)
for (const link of links) {
    link.style.color = "purple";
}