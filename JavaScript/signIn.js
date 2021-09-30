function goToHome(){
    window.location.assign('../RelianceLandingPage.html')
}


let forms = document.getElementById('detail')

forms.addEventListener('submit', function(e){
    e.preventDefault();
    let d = document.getElementById('displayError')
    let m_num = document.getElementById('mobileNumber').value;
    let city = document.getElementById('city').value;

    if(m_num.length !== 10 && m_num.length !== 0 ){
       d.textContent = "Enter 10 digits Mobile Number"
    }else if(m_num.length === 0){
        d.textContent = "The Mobile Number field is Required !"
    }else if(m_num.length == 10){
        console.log(m_num,city)
    }
    
})