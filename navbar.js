const navigation = document.getElementById('navigation');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', event => {
    console.log('menu');
    navigation.classList.toggle('open');
    event.stopPropagation();
});

document.addEventListener('click', () => {
    console.log('document');
    navigation.classList.remove('open');
});
