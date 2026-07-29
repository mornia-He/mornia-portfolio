/* =================================

MORNIA HE PORTFOLIO

INTERACTION SYSTEM

================================= */



document.addEventListener(
"DOMContentLoaded",
()=>{







/* ===============================
PAGE LOAD
================================ */



document.body.classList.add(
"loaded"
);









/* ===============================
SCROLL REVEAL
================================ */



const revealElements = document.querySelectorAll(
`
.project-card,
.about-main,
.about-detail,
.section-title,
.work-section,
.large-image,
.gallery-item,
.gallery-three img,
.video-box,
.project-info-item
`
);






const revealObserver = new IntersectionObserver(

(entries)=>{


entries.forEach(
entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);



revealObserver.unobserve(
entry.target
);



}


}

);



},

{

threshold:.15

}

);






revealElements.forEach(
element=>{


element.classList.add(
"reveal"
);



revealObserver.observe(
element
);



}

);









/* ===============================
BACKGROUND FOLLOW
================================ */



const shapes =
document.querySelectorAll(
".blur-shape"
);





document.addEventListener(
"mousemove",
(e)=>{


const x =

(e.clientX /
window.innerWidth
-
0.5)
*
50;



const y =

(e.clientY /
window.innerHeight
-
0.5)
*
50;





shapes.forEach(
(shape,index)=>{


const speed =
(index+1)*0.25;



shape.style.transform =

`
translate(
${x*speed}px,
${y*speed}px
)
`;



}

);



}

);









/* ===============================
PROJECT CARD 3D EFFECT
================================ */



const cards =
document.querySelectorAll(
".project-card"
);






cards.forEach(
card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX -
rect.left;



const y =
e.clientY -
rect.top;



const rotateX =
(y -
rect.height/2)
/
60;



const rotateY =
(rect.width/2 -
x)
/
60;





card.style.transform =

`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)

`;



}

);






card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"";


}

);



}

);









/* ===============================
IMAGE BLUR LOAD
================================ */



const images =
document.querySelectorAll(
"img"
);






images.forEach(
img=>{


img.classList.add(
"image-loading"
);





if(img.complete){


img.classList.add(
"image-loaded"
);


}

else{


img.addEventListener(
"load",
()=>{


img.classList.add(
"image-loaded"
);


}

);


}



}

);









/* ===============================
VIDEO LAZY PLAY
================================ */



const videos =
document.querySelectorAll(
"video"
);





const videoObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(
entry=>{


if(entry.isIntersecting){



entry.target.play()
.catch(
()=>{}
);



}



else{


entry.target.pause();


}



}

);



},

{

threshold:.4

}

);






videos.forEach(
video=>{


videoObserver.observe(
video
);



}

);









/* ===============================
NAVBAR EFFECT
================================ */



const navbar =
document.querySelector(
".navbar"
);





window.addEventListener(
"scroll",
()=>{


if(!navbar)
return;




if(window.scrollY>80){


navbar.classList.add(
"nav-scroll"
);



}

else{


navbar.classList.remove(
"nav-scroll"
);



}



}

);









/* ===============================
ANCHOR SMOOTH SCROLL
================================ */



document.querySelectorAll(
'a[href^="#"]'
)
.forEach(
link=>{


link.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


}

);



}

);






});