export function loadContact() {
    const content = document.getElementById('content');
    // Clear previous content
    content.innerHTML = ''; 

    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contactSection.appendChild(contactTitle);

    const email = document.createElement('p');
    email.textContent = 'Email: codewithkenward@gmail.com';
    contactSection.appendChild(email);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: +2348066633724';
    contactSection.appendChild(phone);

    content.appendChild(contactSection);
}
