

  document.getElementById('home-btnn').addEventListener('click', ()=>{
    window.location.href = "index.html";
    
  
  })

  document.getElementById('abt-btn').addEventListener('click', ()=>{
    window.location.href = "index.html";
   


  
  })
  
  document.getElementById('port-btn').addEventListener('click', ()=>{
    window.location.href = "index.html";
    


  
  })
  
  document.getElementById('resume-btn').addEventListener('click', ()=>{
    window.location.href = "index.html";
    


  
  })



  // socials links
document.getElementById('fb-link').addEventListener('click', ()=>{
  // window.location.replace("https://www.facebook.com/usmanashrraf?mibextid=ZbWKwLhttps://www.facebook.com/usmanashrraf?mibextid=ZbWKwL");
  window.open("https://www.facebook.com/usmanashrraf?mibextid=ZbWKwLhttps://www.facebook.com/usmanashrraf?mibextid=ZbWKwL", "_blank");
})

document.getElementById('insta-link').addEventListener('click', ()=>{
  window.open("https://instagram.com/usmanashrraf?igshid=NTc4MTIwNjQ2YQ==https://instagram.com/usmanashrraf?igshid=NTc4MTIwNjQ2YQ==", "_blank");

})

document.getElementById('wp-link').addEventListener('click', ()=>{
  window.open("https://wa.me/3413912683", "_blank");
})



document.getElementById('cmt-form').addEventListener('submit', (e)=>{
  

       if(document.getElementById('msg').value == "" || document.getElementById('fname').value=="" ||document.getElementById('lname').value=="" || document.getElementById('email').value=="" ){
         e.preventDefault();
         alert('field is empty')
       }
})






