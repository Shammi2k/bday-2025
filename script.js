const mainImage = document.getElementById('main-image');
const number = document.getElementById('number');

number.addEventListener('click', (event) => {
    const rect = number.getBoundingClientRect();
    const x = rect.left + rect.width / 2; // Center of the clickable image
    const y = rect.top + rect.height / 2; // Center of the clickable image

    // Set the position of the clickable image to the center of the screen
    number.classList.add('fade-out');
    mainImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        let numAlt = number.getAttribute('alt');
        mainImage.src = 'images/p' + numAlt + '.jpg'; // Change to person image
        mainImage.onload = () => {
            mainImage.style.opacity = 1; // Fade in
            resetClickableImage();
            let nextNum = parseInt(numAlt) + 1;
            number.classList.remove('n' + numAlt);
            number.classList.add('n' + nextNum);
            if (nextNum == 11) {
                number.classList.remove('clickable');
                number.removeEventListener('click');
            }
            number.setAttribute('src', 'images/n' + nextNum + '.svg');
            number.setAttribute('alt', nextNum);
        };
    }, 500); // Wait for fade out to complete
});

function resetClickableImage() {
    number.classList.remove('fade-out');
}