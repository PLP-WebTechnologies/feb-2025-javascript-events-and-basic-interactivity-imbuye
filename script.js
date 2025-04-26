// Button Click - Change Color Randomly
document.getElementById('colorButton').addEventListener('click', () => {
    const button = document.getElementById('colorButton');
    button.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button.textContent = 'Cat Magic Unleashed!';
  });
  
  // Double Click Surprise
  document.getElementById('secretButton').addEventListener('dblclick', () => {
    alert('🎉 You found the hidden catnip party!');
  });
  
  // Hover effect on Image
  const galleryImage = document.getElementById('galleryImage');
  galleryImage.addEventListener('mouseenter', () => {
    galleryImage.style.transform = 'scale(1.1)';
    galleryImage.style.borderColor = 'gold';
  });
  galleryImage.addEventListener('mouseleave', () => {
    galleryImage.style.transform = 'scale(1)';
    galleryImage.style.borderColor = '#ff6f91';
  });
  
  // Keypress detection
  document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
  });
  
  // Image Gallery
  const images = [
    'https://placekitten.com/300/200',
    'https://placekitten.com/301/200',
    'https://placekitten.com/302/200',
  ];
  let currentImageIndex = 0;
  
  document.getElementById('nextImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    galleryImage.style.opacity = 0; // Fade out
    setTimeout(() => {
      galleryImage.src = images[currentImageIndex];
      galleryImage.style.opacity = 1; // Fade in
    }, 300);
  });
  
  // Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.opacity = 0;
        setTimeout(() => {
          tab.style.display = 'none';
        }, 300);
      });
      
      const targetTab = document.getElementById(btn.getAttribute('data-tab'));
      setTimeout(() => {
        targetTab.style.display = 'block';
        setTimeout(() => {
          targetTab.style.opacity = 1;
        }, 50);
      }, 300);
    });
  });
  
  // Form Validation
  const form = document.getElementById('signupForm');
  const formMessages = document.getElementById('formMessages');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
  
    formMessages.textContent = '';
  
    if (name.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '') {
      formMessages.textContent = 'All fields must be filled out!';
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      formMessages.textContent = 'Invalid email address!';
      return;
    }
  
    if (password.value.length < 8) {
      formMessages.textContent = 'Password must be at least 8 characters!';
      return;
    }
  
    formMessages.style.color = 'green';
    formMessages.textContent = 'Welcome to Spark & Spidey\'s fan club! 🐾';
  });
  
  // Real-time Feedback
  const passwordInput = document.getElementById('password');
  passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
      formMessages.textContent = 'Password too short!';
      formMessages.style.color = 'red';
    } else {
      formMessages.textContent = '';
    }
  });
  