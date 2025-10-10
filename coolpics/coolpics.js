const menuButton = document.getElementById('menu-button');
const navList = document.querySelector('nav ul');


menuButton.addEventListener('click', () => {
  if (navList.style.display === 'block') {
    navList.style.display = 'none';
  } else {
    navList.style.display = 'block';
  }
});