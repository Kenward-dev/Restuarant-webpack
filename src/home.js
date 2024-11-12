export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Enjoy delicious meals with a cozy ambiance.';

    content.append(headline, description);
    }
