const mainImage = document.getElementById('main-image');
const number = document.getElementById('number');

number.addEventListener('click', (event) => {
    const rect = number.getBoundingClientRect();
    const x = rect.left + rect.width / 2; // Center of the clickable image
    const y = rect.top + rect.height / 2; // Center of the clickable image

    // Set the position of the clickable image to the center of the screen
    number.classList.add('fade-out');
    mainImage.classList.add('flip');
    setTimeout(() => {
        let numAlt = number.getAttribute('alt');
        mainImage.src = 'images/p' + numAlt + '.jpg'; // Change to person image
        mainImage.load = () => {
            resetClickableImage();
            let nextNum = parseInt(numAlt) + 1;
            number.classList.remove('n' + numAlt);
            number.classList.add('n' + nextNum);
            if (nextNum == 11) {
                number.classList.remove('clickable');
            }
            number.style.visibility = 'hidden';
            mainImage.classList.remove('flip');
            number.setAttribute('src', 'images/n' + nextNum + '.svg');
            number.load = () => {
                number.style.visibility = 'visible';
                number.setAttribute('alt', nextNum);
            }
        }
    }, 500); // Wait for fade out to complete
});

function resetClickableImage() {
    number.classList.remove('fade-out');
}