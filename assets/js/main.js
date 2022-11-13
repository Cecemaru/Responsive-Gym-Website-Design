/* ================ SHOW MENU =============== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ========= MENU SHOW ========= */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ========= MENU HIDDEN ======== */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ============== REMOVE MENU MOBILE CLICK LIST ============ */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((list) => list.addEventListener("click", linkAction));

/* =============== CHANGE BACKGROUND HEADER ============= */
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/* ============== CALCULATE BMI JS ================== */
const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();

  // Check if the fields have a value
  if (calculateCm.value == "" || calculateKg.value == "") {
    // Add and remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    // Show message
    calculateMessage.textContent = "Fill in the Height and Weight";

    // Remove message three seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    // BMI Formul
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));

    // Show your health status
    if (bmi < 18.5) {
      // Add color and display message
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are Skinny`;
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are Healthy`;
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are Overweight`;
    }

    // To clear the input field
    calculateKg.value = "";
    calculateCm.value = "";

    // Remove message four seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};
calculateForm.addEventListener("submit", calculateBmi);
