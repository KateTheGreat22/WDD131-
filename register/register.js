let participantCount = 1;

function participantTemplate(count) {
  return `
  <section class="participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
      <label for="fname${count}">First Name<span>*</span></label>
      <input id="fname${count}" type="text" name="fname${count}" required />
    </div>
    <div class="item activities">
      <label for="activity${count}">Activity #<span>*</span></label>
      <input id="activity${count}" type="text" name="activity${count}" />
    </div>
    <div class="item">
      <label for="fee${count}">Fee ($)<span>*</span></label>
      <input id="fee${count}" type="number" name="fee${count}" />
    </div>
    <div class="item">
      <label for="date${count}">Desired Date<span>*</span></label>
      <input id="date${count}" type="date" name="date${count}" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select id="grade${count}">
        <option selected value="" disabled selected></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>
  `;
}

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
