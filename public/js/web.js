const nameItem = document.querySelectorAll('.name-item');

nameItem.forEach(element => {
    element.addEventListener('mouseover', function () {
        const menu = document.querySelector(`.${element.id}-menu`);
        menu.style.display = 'block';
    })
});

nameItem.forEach(element => {
    element.addEventListener('mouseout', function () {
        const menu = document.querySelector(`.${element.id}-menu`);
        menu.addEventListener('mouseover', function () {
            menu.style.display = 'block';
        })
        menu.addEventListener('mouseout', function () {
            menu.style.display = 'none';
        });
    })
});

const blog = document.querySelector('#blog');
blog.addEventListener('mouseover', function () {
    const menu = document.querySelector(`.${blog.id}-menu`);
    menu.style.display = 'unset';
})

blog.addEventListener('mouseout', function () {
    const menu = document.querySelector(`.${blog.id}-menu`);
    menu.style.display = 'none';
})

const phone = document.querySelector('.phone');
const tab = document.querySelector('.tab');
const xmarkIcon = document.querySelector('.xmark-icon');
phone.addEventListener('click', function () {
    phone.style.display = 'none';
    tab.style.display = 'inline-block';
    tab.style.transition = 'all 1s ease'
})
xmarkIcon.addEventListener('click', function () {
    phone.style.display = 'inline-block';
    phone.style.transition = 'all 1s ease'
    tab.style.display = 'none';
})