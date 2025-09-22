// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Simple contact form validation
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name === '' || email === '' || message === ''){
      alert('Please fill in all fields!');
      e.preventDefault();
    } else {
      alert('Message sent successfully!');
    }
  });
}
