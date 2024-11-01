const form = document.getElementById('checkout-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const address = form.elements['address'].value;
  const city = form.elements['city'].value;
const state = form.elements['state'].value;
const zip = form.elements['zip'].value;
const cardName = form.elements['card-name'].value;
const cardNumber = form.elements['card-number'].value;
const cardExpiry = form.elements['card-expiry'].value;
const cardCvc = form.elements['card-cvc'].value;

// Validate form input before submitting
if (name === '' || email === '' || address === '' || city === '' || state === '' || zip === '' || cardName === '' || cardNumber === '' || cardExpiry === '' || cardCvc === '') {
alert('Please fill out all fields');
return;
}

// Simulate payment processing and redirect to confirmation page
submitBtn.disabled = true;
setTimeout(() => {
window.location.href = 'confirmation.html';
}, 3000);
});