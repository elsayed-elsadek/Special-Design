// auto landing background
let landingpage = document.querySelector(".landing-page");
let imgesarr = ["01.jpg", "02.jpg", "05.jpg", "07.jpg"];

let randombackground = true;
let backgroundintelval;


let localbackground = localStorage.getItem("random-background");
if (localbackground !== null) {

    if (localbackground === 'true') {
        randombackground = true;
    } else {
        randombackground = false;
    }

    document.querySelectorAll(".btn").forEach(e => {
        e.classList.remove("active");
    });

    if (localbackground === 'true') {
        document.querySelector(".change-background .btn[data-background='yes']").classList.add("active");
    } else {
        document.querySelector(".change-background .btn[data-background='no']").classList.add("active");
    }
}

backgroundintelval = setInterval(() => {
    if (randombackground == true) {
        let randomnums = Math.floor(Math.random() * imgesarr.length);
        landingpage.style.backgroundImage = 'url("imgs/' + imgesarr[randomnums] + '")';
    }
}, 10000);

// /auto landing background
let myboxsetting = document.querySelector(".box-setting");
let myicon = document.querySelector(".fa-solid");

myicon.onclick = function () {
    this.classList.toggle("fa-spin");
    myboxsetting.classList.toggle("open");
}

// change colors
let maincolor = localStorage.getItem("--green-color");
if (maincolor !== null) {
    document.documentElement.style.setProperty("--green-color", localStorage.getItem("--green-color"));
    document.querySelectorAll(".ul-colors li").forEach(element => {
        element.classList.remove("active");
        if (element.dataset.color === maincolor) {
            element.classList.add("active");
        }
    });
}

const mycolors = document.querySelectorAll(".ul-colors li");
mycolors.forEach(li => {
    li.addEventListener("click", e => {
        document.documentElement.style.setProperty("--green-color", e.target.dataset.color);
        localStorage.setItem("--green-color", e.target.dataset.color);

        // remove active class 
        handelactive(e)
    });
});

// change background
const changebackground = document.querySelectorAll(".change-background button");
changebackground.forEach(btn => {
    btn.addEventListener("click", e => {
        // remove active class 
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        });
        e.target.classList.add("active");

        // y/n random background
        if (e.target.dataset.background == "yes") {
            randombackground = true;
            localStorage.setItem("random-background", true);
        } else {
            randombackground = false;
            localStorage.setItem("random-background", false);
        }
    });
});

// skills selctor

let myskills =document.querySelector(".ourskills");


window.onscroll =function (){
let ofsettop = myskills.offsetTop ;
let ofsetheight =myskills.offsetHeight
let windowheight =this.innerHeight ;
let windowscrolltop = this.pageYOffset;

if (windowscrolltop <= (ofsettop + ofsetheight - windowheight)){

let myprogressspan =document.querySelectorAll(".skill-box span");
myprogressspan.forEach(skill => {
    skill.style.width = skill.dataset.progress;

})
}};



// popup imgs

let mygallaryimgs =document.querySelectorAll(".our-gallary img");

mygallaryimgs.forEach(img => {
img.addEventListener('click',(e) =>{
let overlay =document.createElement("div");
overlay.className ='overlay-img';
document.body.appendChild(overlay);

let popupbox =document.createElement("div");
popupbox.className ="popup-box";
if(img.alt !== null){
    let popupheading =document.createElement("h1");
    popupheading.className="popupheading";
    let popupheadingtext =document.createTextNode(img.alt);
 popupheading.appendChild(popupheadingtext);
 popupbox.appendChild(popupheading);
}
let popupimg =document.createElement("img");
popupimg.src =img.src;
popupbox.appendChild(popupimg);
document.body.appendChild(popupbox)

let exitimg =document.createElement("span");
exitimg.className ="exitimg";
let exitimgtext =document.createTextNode("X");
exitimg.appendChild(exitimgtext);
popupbox.appendChild(exitimg);



})

});

document.addEventListener('click' , e => {
    if(e.target.className == 'exitimg'){

document.querySelector(".popup-box").remove();
document.querySelector(".overlay-img").remove();



    }
})

// nav-bullets

let mybullets =document.querySelectorAll(".nav-bullets .nav-box");

let mynavlinks =document.querySelectorAll(".landing-page .links");

function scrooltolinks (link){
    link.forEach(li =>{
        li.addEventListener('click',(e) =>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
        
            }) ;
        });
        
        })

}

scrooltolinks(mybullets);
scrooltolinks(mynavlinks);


// handel active

function handelactive (ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach( e => {
        e.classList.remove("active")
    });
    ev.target.classList.add("active")

}






let navbullet =document.querySelector(".nav-bullets") ;

let optionbullet =document.querySelectorAll(".shownavbullet button");
let nbulllocals =localStorage.getItem("optionbullet")

if(nbulllocals !== null){
    optionbullet.forEach( btn => {
        btn.classList.remove("active");
    });
if (nbulllocals === 'block'){
    navbullet.style.display = 'block';
document.querySelector(".shownavbullet .yes").classList.add("active");
}
else {
    navbullet.style.display = 'none';
document.querySelector(".shownavbullet .no").classList.add("active");


}

}


optionbullet.forEach( btn =>{
    
    btn.addEventListener('click' , (e) =>{
if(btn.dataset.show === 'yes'){
    navbullet.style.display = 'block'
    localStorage.setItem("optionbullet" , 'block');

}
else {
    navbullet.style.display = 'none'
    localStorage.setItem("optionbullet" , 'none');


}

handelactive(e);

    })
});

// reset-option
document.querySelector(".reset-option button").onclick =function(){
 localStorage.removeItem("random-background");
 localStorage.removeItem("--green-color");
 localStorage.removeItem("optionbullet");


    
// localStorage.clear();
window.location.reload();

};


// toglle
let tlinks =document.querySelector(".links");

let togllelinks =document.querySelector(".toglle-links");

togllelinks.onclick = function(e){
    e.stopPropagation();
    
this.classList.toggle("menu-active");
tlinks.classList.toggle("open");

}


document.addEventListener('click' , (e) => {
    if (e.target !== togllelinks && e.target !== tlinks){
        if(tlinks.classList.contains("open")){

            togllelinks.classList.toggle("menu-active") 
            tlinks.classList.toggle("open")       
        } };
});

tlinks.onclick =function(e){
e.stopPropagation();
}
