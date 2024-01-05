////////////////////////////////// for progress barsss////////////////////////////////////////////////
////////////////////////////////// for progress barsss////////////////////////////////////////////////
////////////////////////////////// for progress barsss////////////////////////////////////////////////



// html progress bar
function htmlProgress() {

    var counter = 0;
var targetCount = document.getElementById('html').getAttribute("data-val")
var increment = 1;
var interval = 10;


  var timer = setInterval(function() {
    counter += increment;
    document.getElementById('html').textContent = counter + "%";
    document.getElementById('html').style.width = counter + "%";


    if (counter >= targetCount) {
      clearInterval(timer);
    }
  }, interval);
}

htmlProgress();


// JS progress bar
function JsProgress() {

    var counter = 0;
var targetCount = 85;
var increment = 1;
var interval = 10;


  var timer = setInterval(function() {
    counter += increment;
    document.getElementById('js').textContent = counter + "%";
    document.getElementById('js').style.width = counter + "%";


    if (counter >= targetCount) {
      clearInterval(timer);
    }
  }, interval);
}

JsProgress();



// Php progress bar
function PhpProgress() {

    var counter = 0;
var targetCount = document.getElementById('php').getAttribute("data-val");
var increment = 1;
var interval = 5;


  var timer = setInterval(function() {
    counter += increment;
    document.getElementById('php').textContent = counter + "%";
    document.getElementById('php').style.width = counter + "%";


    if (counter >= targetCount) {
      clearInterval(timer);
    }
  }, interval);
}

PhpProgress();


// wordpress progress
function wpProgress() {

    var counter = 0;
var targetCount = document.getElementById('wp').getAttribute("data-val");
var increment = 1;
var interval = 20;


  var timer = setInterval(function() {
    counter += increment;
    document.getElementById('wp').textContent = counter + "%";
    document.getElementById('wp').style.width = counter + "%";


    if (counter >= targetCount) {
      clearInterval(timer);
    }
  }, interval);
}

wpProgress();


/////////////////////////////////////////////////////



////////////////////////////////////////// for facts 
function startCounter5() {

    var counter = 0;
var targetCount = document.getElementById('c').getAttribute("data-val");
var increment = 1;
var interval = 20;


  var timer = setInterval(function() {
    counter += increment;
    document.getElementById('c').textContent = counter;
   


    if (counter >= targetCount) {
      clearInterval(timer);
    }
  }, interval);
}



function startCounter6() {

    var counter = 0;
var targetCount = document.getElementById('p').getAttribute("data-val");
var increment = 1;
var interval = 20;


  var timer = setInterval(function() {
    counter += increment;
    document.getElementById('p').textContent = counter;
   


    if (counter >= targetCount) {
      clearInterval(timer);
    }
  }, interval);
}








 // when we scroll we ill get numbers animation
window.addEventListener('scroll', ()=>{
if(window.innerWidth > 877)
    if(window.pageYOffset > 200){
        startCounter5();
        startCounter6();
        
    }
})


// more about me Button in card
document.getElementById('more-abt').addEventListener('click', ()=>{


  document.getElementById('main-sec').classList.add('hide-main-el')
  document.getElementById('abt-sec').classList.remove('hide-abt')
// borders
  document.getElementById('home-btn').style.color = "black";
  document.getElementById('abt-btn').style.color = "black";
  document.getElementById('home-btn').style.borderBottom = "none";
  document.getElementById('abt-btn').style.borderBottom = " 1px solid black";

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





// home btn action 
document.getElementById('home-btn').addEventListener('click', ()=>{

    document.getElementById('abt-sec').classList.add('hide-abt')
    document.getElementById('main-sec').classList.remove('hide-main-el')
    document.getElementById('resume-sec').classList.add('hide-resume');
    document.getElementById('port-sec').classList.add('hide-port');
    //  document.getElementById('contact-sec').classList.add('hide-contact');

  
    // barss
    htmlProgress();
    JsProgress();
    PhpProgress();
    wpProgress();
  
  // borders and color
  
     document.getElementById('home-btn').style.color = "black"
     document.getElementById('home-btn').style.borderBottom = " 2px solid black"


    
    document.getElementById('abt-btn').style.color = "black"
    document.getElementById('abt-btn').style.borderBottom = "0"
    document.getElementById('contact-btn').style.color = "black"
    document.getElementById('contact-btn').style.borderBottom = "0"

    document.getElementById('port-btn').style.color = "black"
    document.getElementById('port-btn').style.borderBottom = "0"
    document.getElementById('resume-btn').style.color = " black"
    document.getElementById('resume-btn').style.borderBottom = "0"
  
  })
  