export function loadMenu() {
    const content = document.getElementById('content');
    // Clear previous content
    content.innerHTML = ''; 

    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');

    const breakfastTitle = document.createElement('h2');
    breakfastTitle.textContent = 'Nigerian Breakfast';
    menuSection.appendChild(breakfastTitle);

    const breakfastItems = [
        'Akara and Pap',
        'Yam and Egg Sauce',
        'Moi Moi and Custard',
        'Beans and Bread'
    ];
    breakfastItems.forEach(item => {
        const listItem = document.createElement('p');
        listItem.textContent = item;
        menuSection.appendChild(listItem);
    });

    const dinnerTitle = document.createElement('h2');
    dinnerTitle.textContent = 'Nigerian Dinner';
    menuSection.appendChild(dinnerTitle);

    const dinnerItems = [
        'Jollof Rice and Chicken',
        'Efo Riro with Pounded Yam',
        'Egusi Soup with Fufu',
        'Fried Rice and Plantain'
    ];
    dinnerItems.forEach(item => {
        const listItem = document.createElement('p');
        listItem.textContent = item;
        menuSection.appendChild(listItem);
    });

    content.appendChild(menuSection);
}
