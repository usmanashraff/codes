// resume btn action 
document.getElementById('resume-btn').addEventListener('click', ()=>{


    document.getElementById('main-sec').classList.add('hide-main-el')
    document.getElementById('abt-sec').classList.add('hide-abt')
    document.getElementById('resume-sec').classList.remove('hide-resume')
    document.getElementById('port-sec').classList.add('hide-port')
    // document.getElementById('contact-sec').classList.add('hide-contact');
  
  // borders color
  document.getElementById('home-btn').style.color = "black"
  document.getElementById('home-btn').style.borderBottom = "0"

  document.getElementById('abt-btn').style.color = "black"
  document.getElementById('abt-btn').style.borderBottom = "0"

  document.getElementById('port-btn').style.color = "black"
    document.getElementById('port-btn').style.borderBottom = "0"
    document.getElementById('contact-btn').style.color = "black"
    document.getElementById('contact-btn').style.borderBottom = "0"
  

    document.getElementById('resume-btn').style.color = "black"
  document.getElementById('resume-btn').style.borderBottom = " 2px solid black"
  
  
  
  })
  