
let forms = document.getElementById("detail");
let inpBtn = document.getElementById('submit')

function goToHome() {
  window.location.assign("../RelianceLandingPage.html");
}

forms.addEventListener("submit", function (e) {
  e.preventDefault();
  let d = document.getElementById("displayError");
  let m_num = document.getElementById("mobileNumber").value;
  let city = document.getElementById("city").value;

  if (m_num.length !== 10 && m_num.length !== 0) {
    d.textContent = "Enter 10 digits Mobile Number";
  } else if (m_num.length === 0) {
    d.textContent = "The Mobile Number field is Required !";
  } else if (m_num.length == 10) {
    inpBtn.style.background ="green"

    let info = {
      m_num,
      city
    }

    localStorage.setItem('userInfo',JSON.stringify(info))
    window.location.assign("./profile.html");
  }
});








