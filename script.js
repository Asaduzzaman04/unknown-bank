// ====> <user-input-section> <==== \\
const userInfo = {
  email: "asaduzzaman@gmail.com",
  password: 12345678,
};

const allInfo = [];

const validEmail = document.getElementById("email");
const validPassword = document.getElementById("password");
const btn = document.getElementById("button");
const success = document.getElementById("userInput");

btn.addEventListener("click", () => {
  if (
    validEmail.value === userInfo.email &&
    parseInt(validPassword.value) === userInfo.password
  ) {
    success.style.display = "none";
    console.log(`button clicked`);
  } else {
    alert("your entered E-mail/Password is not valid");
  }
});
// ====> </user-input-section> <==== \\

// =====> <user-accoutn-info> <===== \\
// const Account = document.getElementById('userAmmountInfo')

const deposidBtn = document.getElementById("deposit-btn");

deposidBtn.addEventListener("click", () => {
  // =====> deposid-input-catch <===== \\
  const depoInput = document.getElementById('deposit-money')
  const depoInputNum = parseFloat(depoInput.value);

  // =====> display-deposit-catch <===== \\

  const disDeops = document.getElementById('deposit').innerText;
  const disDeopsNum = parseFloat(disDeops);
  const res = disDeopsNum + depoInputNum;
  document.getElementById('deposit').innerText = res; 
  
});


const withdrawButton = document.getElementById("withdraw-btn");


withdrawButton.addEventListener(`click`, () => {


});

// =====> </user-accoutn-info> <===== \\
