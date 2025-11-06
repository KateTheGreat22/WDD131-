import { participantTemplate } from './Templates.js';

let participantCount = 1;

const addButton = document.getElementById('add');
const participantsFieldset = document.querySelector('.participants');

addButton.addEventListener('click', () => {
  participantCount++;
  const newParticipantHTML = participantTemplate(participantCount);
  addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
});

function totalFees() {
  let feeElements = document.querySelectorAll('[id^=fee]');
  feeElements = [...feeElements];

  const total = feeElements.reduce((sum, input) => {
    const fee = parseFloat(input.value) || 0;
    return sum + fee;
  }, 0);

  return total;
}

function submitForm(event) {
  event.preventDefault();

  const requiredInputs = document.querySelectorAll('input[required]');
  let allFilled = true;

  requiredInputs.forEach(input => {
    if (!input.value.trim()) {
      allFilled = false;
      input.style.border = '2px solid red';
    } else {
      input.style.border = '';
    }
  });

  if (!allFilled) {
    alert('Please fill in all required fields before submitting.');
    return;
  }

  const total = totalFees();
  const adultName = document.getElementById('adult_name').value;

  const form = document.querySelector('form');
  form.style.display = 'none';

  const summary = document.getElementById('summary');
  summary.innerHTML = `
    <h2>Registration Complete!</h2>
    <p>Thank you, ${adultName}, for registering ${participantCount} participant(s).</p>
    <p><strong>Total Fees:</strong> $${total}</p>
  `;
}

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);
