const menuButton = document.getElementById('menu-button');
const navList = document.querySelector('nav ul');

function toggleMenu() {
  navList.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);

function handleResize() {
  if (window.innerWidth > 1000) {
    navList.classList.remove('hide');
  } else {
    navList.classList.add('hide');
  }
}

window.addEventListener('resize', handleResize);

handleResize();

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');
  
  if (clickedImage) {
    const src = clickedImage.getAttribute('src');
    const alt = clickedImage.getAttribute('alt');
    const fullSrc = src; 
    modalImage.setAttribute('src', fullSrc);
    modalImage.setAttribute('alt', alt);
 
    modal.showModal();
  }
});

closeButton.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});