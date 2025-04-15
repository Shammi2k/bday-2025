const mainImage = document.getElementById('main-image');
const number = document.getElementById('number');

number.addEventListener('click', () => {
    mainImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        let numAlt = number.getAttribute('alt');
        mainImage.src = 'images/p' + numAlt + '.jpg'; // Change to person image
        mainImage.style.opacity = 1; // Fade in
        let nextNum = parseInt(numAlt) + 1;
        number.classList.remove('n' + numAlt);
        number.classList.add('n' + nextNum);
        if(nextNum == 11) {
            number.classList.remove('clickable');
            number.removeEventListener('click');
        }
        number.setAttribute('src', 'images/n' + nextNum + '.svg');
        number.setAttribute('alt', nextNum);
        // addNumber2();
    }, 500); // Wait for fade out to complete
});

function addNumber2() {
    const number2 = document.createElement('img');
    number2.id = 'number2';
    number2.className = 'clickable';
    number2.src = 'images/number2.jpg'; // Path to number 2 image
    number2.alt = 'Number 2';
    number2.addEventListener('click', () => {
        mainImage.style.opacity = 0; // Fade out
        setTimeout(() => {
            mainImage.src = 'images/number2.jpg'; // Change to another person image
            mainImage.style.opacity = 1; // Fade in
        }, 500); // Wait for fade out to complete
    });
    document.querySelector('.image-container').appendChild(number2);
}