function goToHome() {
    window.location.assign("../RelianceLandingPage.html");
  }

  let userDetails = JSON.parse(localStorage.getItem('userInfo'))

  console.log(userDetails)

  let m_span = document.querySelectorAll(".num_span");
  m_span.forEach(element => {
      element.textContent = userDetails.m_num
  });
  //m_span