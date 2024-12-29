var newImages = [
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1680026108",
    "https://m.media-amazon.com/images/M/MV5BYjdlZjZlMTQtMTQwNS00MTBjLWE3YjQtM2Y3NjQ5ZWEzMzRmXkEyXkFqcGc@._V1_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHu2HEStQQeQeEKWZkISCjHcKrabOfe2Kyg&s",
     "https://m.media-amazon.com/images/M/MV5BNGVmZTVjZDMtMzkyZi00MTczLWE4OTUtY2Y1ODBlMGFlYTAxXkEyXkFqcGc@._V1_.jpg",
    "https://upload.wikimedia.org/wikipedia/en/b/bf/Call_of_Duty_Modern_Warfare_3_box_art.png"
];

function changeImages() {
    const cards = document.querySelectorAll(".card img");
    cards.forEach((img, index) => {
        if (newImages[index]) {
            img.src = newImages[index];
        }
    });
}

function shuffleImages() {
    for (let i = newImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newImages[i], newImages[j]] = [newImages[j], newImages[i]];
    }
}

document.querySelector(".button").addEventListener("click", () => {
    shuffleImages();
    changeImages();
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const menus = document.querySelectorAll('.menu');

    hamburgerIcon.addEventListener('click', function () {
        menus.forEach(menu => menu.classList.toggle('menu-links-hidden'));
    });
});
