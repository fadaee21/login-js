const form = document.querySelector("form#Validation");
let eu = false;
let ep = false;

const userValidation = (e) => {
  const spanUsername = document.querySelector("span#username");
  spanUsername.textContent = e.target.value;
  const userReg = /^[a-zA-Z][\w.]{5,10}$/;
  const userValid = userReg.test(e.target.value);
  if (userValid) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-invalid");
    eu = true;
  } else {
    e.target.classList.add("is-invalid");
    e.target.classList.remove("is-valid");
    eu = false;
  }
};

const passwordValidation = (e) => {
  const regex = /^[A-Za-z0-9]\w{8,}$/;
  const val = e.target.value;
  const alert = document.getElementById("d12");
  if (regex.test(val)) {
    alert.style.display = "block";
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-invalid");
    alert.textContent = "Password is acceptable";
    alert.classList.add("alert", "alert-info");
    ep = true;
  } else {
    e.target.classList.add("is-invalid");
    alert.style.display = "none";
    ep = false;
  }
};

const eye = document.querySelector("span#EYE");
eye.addEventListener("click", () => {
  const attr = form.Pass.getAttribute("type");
  const newAttr = attr === "password" ? "text" : "password";
  form.Pass.setAttribute("type", newAttr);
});

form.User.addEventListener("keyup", userValidation);
form.Pass.addEventListener("keyup", passwordValidation);

form.addEventListener("submit", (e) => {
    if (!eu || !ep) {
        e.preventDefault();
        alert("not submitted");
    }
    
});

