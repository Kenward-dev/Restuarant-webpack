import { loadMenu } from './menu';
import { loadContact } from './contact';
import './style.css';

function loadHomepage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const welcome = document.createElement('h1');
    welcome.textContent = 'Welcome to Kenward’s Nigerian Restaurant!';
    content.appendChild(welcome);

    const description = document.createElement('p');
    description.textContent = 'Experience the taste of authentic Nigerian cuisine!';
    content.appendChild(description);
}

document.addEventListener('DOMContentLoaded', () => {
    loadHomepage();

    document.getElementById('home-btn').addEventListener('click', loadHomepage);
    document.getElementById('menu-btn').addEventListener('click', loadMenu);
    document.getElementById('contact-btn').addEventListener('click', loadContact);
});
