const uploadInput = document.getElementById('passport-upload');

uploadInput.addEventListener('change', function(e) {
  const reader = new FileReader();
  reader.onload = function(event) {
    const profilePic = document.querySelector('.banner img');
    profilePic.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Number of slides visible at once (adjust as needed)
    spaceBetween: 20, // Spacing between slides (optional)
    loop: true, // Enable looping (optional)
    pagination: {
      el: '.swiper-pagination', // Element for pagination dots (optional)
    },
    navigation: {
      nextEl: '.swiper-button-next', // Element for next button (optional)
      prevEl: '.swiper-button-prev', // Element for previous button (optional)
    },
    autoplay: {
      delay: 3000, // Autoplay after 3 seconds
      disableOnInteraction: false, // Optional: Don't stop autoplay on user interaction
    }
  });
});

// Import Swiper Autoplay Module (assuming you use a bundler like Webpack):
import { Autoplay } from 'swiper';
Swiper.use([Autoplay]);