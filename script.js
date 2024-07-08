const menuIcon = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.getElementById("closeSidebar");

menuIcon.addEventListener("click", function () {
  sidebar.classList.add("active"); // Adjust width to match sidebar width in CSS
});

closeSidebar.addEventListener("click", function () {
  sidebar.classList.remove("active"); // Close sidebar by setting width to 0px
});

// Carousel
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

// Back to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// const menuIcon = document.getElementById("menu");
// const sidebar = document.querySelector(".sidebar");
// const closeSidebar = document.getElementById("closeSidebar");

// menuIcon.addEventListener("click", function () {
//   sidebar.style.width = "200px"; // Adjust width to match sidebar width in CSS
// });

// closeSidebar.addEventListener("click", function () {
//   sidebar.style.width = "0px"; // Close sidebar by setting width to 0px
// });


//JS Code for popup of login/register
document.addEventListener('DOMContentLoaded', () => {
  const loginRegisterIcon = document.getElementById('loginRegisterIcon');
  const popupForm = document.getElementById('popupForm');
  const closePopup = document.querySelector('.popup-form .close');
  const registerLink = document.getElementById('registerLink');
  const loginLink = document.getElementById('loginLink');
  const loginForm = document.getElementById('loginForm');
  const registrationForm = document.getElementById('registrationForm');

  loginRegisterIcon.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor click behavior
    popupForm.style.display = 'block';
  });

  closePopup.addEventListener('click', () => {
    popupForm.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
      popupForm.style.display = 'none';
    }
  });

  registerLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
  });

  loginLink.addEventListener('click', (event) => {
    event.preventDefault();
    registrationForm.style.display = 'none';
    loginForm.style.display = 'block';
  });
  //JS Code for popup of login/register ends

  // Form validation for login and registration forms
  loginForm.addEventListener('submit', (event) => {
    if (!validateForm(loginForm)) {
      event.preventDefault();
      alert('Please fill in all required fields.');
    }
  });

  registrationForm.addEventListener('submit', (event) => {
    if (!validateForm(registrationForm)) {
      event.preventDefault();
      alert('Please fill in all required fields.');
    }
  });

  function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.border = '2px solid red'; // Highlight empty fields
        isValid = false;
      } else {
        input.style.border = ''; // Reset border for filled fields
      }
    });
    return isValid;
  }
});

