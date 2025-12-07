
const facts = [
  "3.96 GPA • Graduating Magna Cum Laude",
  "Research Interests: Rachel Speght & the English pamphlet wars, Mary Shelley, Charlotte Brontë, and literary theory",
  "Teaching Experience: Infield Missionary Teacher for The Church of Jesus Christ of Latter-day Saints & TA for English Fundamentals",
  "Editorial Experience: Copy Editor, Developmental Editor, and Translation Editor",
  "Technical Skills: Certified in Adobe InDesign, proficient in Adobe Creative Cloud, Microsoft Suite, and Google products",
  "Computer Science Minor: Proficient in Python, JavaScript, Erlang, C#, and HTML",
  "Professional Experience: Assistant Programs Manager at Pinetop-Lakeside Library"
];

let currentIndex = 0;

function displayNextFact() {
  const factElement = document.getElementById('rotating-fact');
  
  if (!factElement) return; 
  
  factElement.style.opacity = '0';
  
  setTimeout(() => {
    factElement.textContent = facts[currentIndex];
    factElement.style.opacity = '1';
    
    currentIndex = (currentIndex + 1) % facts.length;
  }, 300);
}


window.addEventListener('DOMContentLoaded', () => {
  const factBox = document.getElementById('fact-box');
  const nextBtn = document.getElementById('next-btn');
  
  if (factBox && nextBtn) {
    displayNextFact();
    
    factBox.addEventListener('click', (e) => {
      if (e.target.id !== 'next-btn') {
        displayNextFact();
      }
    });
    
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      displayNextFact();
    });
  }
});


window.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const successMessage = document.getElementById('success-message');
      

      if (successMessage) {
        successMessage.classList.remove('hidden');

        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 5000);
      }
      
      this.reset();
      
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
});


window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const nav = document.querySelector('nav ul');
  
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});