// portfolio btn action 
document.getElementById('port-btn').addEventListener('click', ()=>{


    document.getElementById('main-sec').classList.add('hide-main-el')
    document.getElementById('abt-sec').classList.add('hide-abt')
    document.getElementById('resume-sec').classList.add('hide-resume')
    document.getElementById('port-sec').classList.remove('hide-port')
    //  document.getElementById('contact-sec').classList.add('hide-contact');
  
  
  // // borders color
  
    document.getElementById('home-btn').style.color = "black"
    document.getElementById('home-btn').style.borderBottom = "0"
  
    document.getElementById('abt-btn').style.color = "black"
    document.getElementById('abt-btn').style.borderBottom = "0"

    document.getElementById('contact-btn').style.color = "black"
    document.getElementById('contact-btn').style.borderBottom = "0"
    document.getElementById('resume-btn').style.color = " black"
    document.getElementById('resume-btn').style.borderBottom = "0"

    document.getElementById('port-btn').style.color = "black"
    document.getElementById('port-btn').style.borderBottom = "2px solid black"
  
  
  
  })
  ///////////////////////////////////////////////////////////////////////////
  

  let show = true;

  document.getElementById('web-start').addEventListener('click', ()=>{

    if(show == true){
    document.getElementById('web-img').style.transform = 'rotate(180deg)';
    show = false;
    }

  else{
  document.getElementById('web-img').style.transform = 'rotate(0deg)';
  show = true;
  }

    document.getElementById('web-portfolio').classList.toggle('hide-web-portfolio');
    
  
  });






  //////////////////////////////////////////////////////////////////////////////

for(let i=0; i<document.getElementsByClassName('web-imgs').length; i++ ){

  document.getElementsByClassName('web-imgs')[i].addEventListener('click', ()=>{
    
  })
}
  
