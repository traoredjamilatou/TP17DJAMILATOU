//SELECTEURS
//document.querySelector("h4").style.background = "yellow";
//const baliseHTML = document.querySelector("h4");

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");


questionContainer.addEventListener("click" , () => {
    //questionContainer.style.background = "red";
   // questionContainer.style.border = "3px solid teal";
   questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
    response.classList.add('show-response');
response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.classList.add('show-response');
    response.style.background = "red";
});

{/* <div> > #id > .class > baliseHTML*/}

//--------------------------------------------------------
//Mouse Events
const mousemove = document.querySelector(".mousemove")

window.addEventListener("mousemove", (e) => {
   mousemove.style.left = e.pageX + "px";
   mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown" , () => {
 mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup" , () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
   });
questionContainer.addEventListener("mouseenter",() => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
questionContainer.style.background = "pink"
});

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});

//---------------------------------------------------------------
//keypress event

const keypressContainer = document.querySelector(".keypress");
//console.log(keypressContainer);
const key = document.getElementById("key");

const ring = (key) => {
    const audio = new Audio();
    audio.scr = ".mp3";
    audio.play();
}
document.addEventListener("keypress", (e) =>{
 console.log(e.key); 
 key.textContent = e.key;
 
 if (e.key === "j") {
     keypressContainer.style.background = "pink";
 } else if (e.key === "h") {
    keypressContainer.style.background = "teal"; 
 } else {
    keypressContainer.style.background = "red";
 }
 
 if (e.key === "Intro Le Fregate") ring(e.keg);
 ring(e.key);
 
});  
    
 //-------------------------------------------------------------- 
 //Scroll Event
 
 const nav = document.querySelector("nav")  
 
window.addEventListener("scroll", (e) => {
    console.log(window.scrollY);
    
    if (window.scrollY > 120){
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

//---------------------------------------------------------------
//Form Event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form")
let pseudo = "";
let language ="";

inputName.addEventListener("input", (e) =>{
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
   language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (cgv.checked) {
      document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>
      `;  
} else {
    alert("Veuilez accepter les CGV");
}
});

//---------------------------------------------------------------------------
//Load event
window.addEventListener("load", () => {
    console.log("Document Charge !");
});
//----------------------------------------------------------------------------
//ForEach
//const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((box) => {
box.addEventListener('click', (e) => {
e.target.style.transform = "scale(0.7)";
});
});
//-----------------------------------------------------------------------------
//addEventListener Vs onclick
/*document.body.onclick = () => {
    console.log("Click !");
};*/
//Bubbling => fin (de base l'eventlistener est parametre en mode Bublbing)
document.body.addEventListener('click', () => {
    console.log("click 1 !");
});
//Usecapture
document.body.addEventListener('click', () => {
    console.log("click 2 !");
}, true);

//https://gomakethings-com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/
//----------------------------------------------------------------------------
//Stop propagation
/*questionContainer.addEventListener("click", (e) => {
    alert("Test !");
    e.stopPropagation();
});*/

//removeEventListener
//---------------------------------------------------------------------------
//BOM
//console.log(window.innerHeight);
//console.log(window.scrollY);
//window.open('http://google.com', "cour js", "height=600,width=800")
//window.clase()

//Evenment adoses a window
//window.alert("hello");

//confirm
btn2.addEventListener("click", () => {
    confirm("Voulet vous vraiment vous tromper ?");
});

//prompt
btn1.addEventListener("click", () => {
    let answer = prompt("Entrez votre nom !");
    questionContainer.innerHTML += "<h3>Bravo" + "</h3>";
});

//time, compte a rebours
setTimeout(() => {
questionContainer.style.borderRadius = "300px";
}, 2000);

let interval = setInterval(() => {
    document.body.innerHTML += `
    <div class='box'>
          <h2>Nouvelle Boite !</h2>
        </div>
   `;
}, 4000);

document.body.addEventListener('click', (e) => {
   e.target.remove();
    clearInterval(interval);
});
//Location
/*console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);*/
//location.replace("http:/lequipe.fr");

/*window.onload = () => {
    location.href = "http://twitter.fr";
};*/
//Navigator
//console.log(navigatoruserAgent);

//https://developermozillaorg//fr//docs/Web/Api/Geolocation/getCurrentPosition

// var options = {
// nableHighAccuacy: true,
// timeout: 5000,
//maximumAge: 0,
//};

//function success(pos) {
 // var crd = pos.coods;
 
 //  console.log("Votr possition actuelle est :");
  //  console.log('Latitude : ${crd.latitude}');
   //  console.log('Longitude : ${crd.longitude}'); 
    //  console.log('La precision est de ${crd.accuracy}metres.');  
//}

//function error(err) {
//  console.warn('ERREUR(${err.code}): ${err.message}');
//}

//navigator.geolocation.getCurrentPosition(success,error, options);

//History
//console.log(history);
//window.history.back();
//history.go(-2)

//----------------------------------------------------------------------
//Setproperty
window.addEventListener('mousemove', (e) => {
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layery + "px");
});