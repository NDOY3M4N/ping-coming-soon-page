const form = document.querySelector("form");
const inputForm = document.querySelector("input[type='text']");
const errorText = document.querySelector("form span");

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', e => {
  e.preventDefault();


  if (!inputForm.value.match(mailformat)) {
    errorText.style.display = 'inline-block';
    inputForm.style.borderColor = 'hsl(354, 100%, 66%)';

    setTimeout(() => {
      errorText.style.display = 'none';
      inputForm.style.borderColor = 'hsl(223, 100%, 88%)';
    }, 3000)
  }
})
