window.addEventListener('scroll',function(){
    var navBar=document.getElementById('nav-bar');
    navBar.classList.toggle(".sticky" , window.scrollY >0);
})
let images=[
    "covidimg.jpg",
    "slider-2.jpg",
    "slider-3.jpg",
    "slider-1.jpg"
   
]
let p2=document.getElementById('p2');
let p3=document.getElementById('p3');
let but1=document.getElementById('but1');
let i=0;
function usingImages(){
let navBarId=document.getElementById('covidimg');
navBarId.src=images[i];
if(i<(images.length-1)){
    i++
    ;
    
}
else{
    i=0;
   
}

if(i==2){
    p2.style.display="none";
    but1.style.display="none";
    p2.style.transition="all 2s";
}
if(i==3){
    p2.style.display="block";
    but1.style.display="block";
    p2.innerHTML="Experienced Doctor and <br> Staff are available";
    p2.style.transition="all 2s";
    
}
if(i==1){
    p2.style.display="block";
    p2.innerHTML="COVID-19 Outbreak<br> International Pandemic"
}
}
setInterval(usingImages,4000)
let home=document.getElementById('hom')
let about=document.getElementById('abo')
let faqs=document.querySelector('.fqs');
let prevention=document.getElementById('pre');
let contact=document.getElementById('cont');

home.addEventListener('click',function(){
    EditHome()
})
function EditHome(){
    faqs.style.color="";
    home.style.color="rgba(255, 38, 0, 0.842)";
    about.style.color="";
    prevention.style.color="";
    contact.style.color="";
}
faqs.addEventListener('click',function(){
    EditFqs("rgba(255, 38, 0, 0.842)")
})
function EditFqs(color){
    faqs.style.color=color;
    about.style.color="";
    home.style.color="";
    prevention.style.color="";
    contact.style.color=""
}
about.addEventListener('click',function(){
    Editabout("rgba(255, 38, 0, 0.842)")
})
function Editabout(color){
    about.style.color=color;
    home.style.color="";
    faqs.style.color="";
    prevention.style.color="";
    contact.style.color="";
}
prevention.addEventListener('click',function(){
    Editprevention("rgba(255, 38, 0, 0.842)")
})
function Editprevention(color){
    about.style.color="";
    home.style.color="";
    faqs.style.color="";
    prevention.style.color=color;
    contact.style.color="";
}
contact.addEventListener('click',function(){
    Editcontact("rgba(255, 38, 0, 0.842)")
})
function Editcontact(color){
    about.style.color="";
    home.style.color="";
    faqs.style.color="";
    prevention.style.color="";
    contact.style.color=color;
}
let messagebutton=document.getElementById('contactbut');
let text1=document.getElementById('txt');
let text2=document.getElementById('txt1');
let text3=document.getElementById('txt2');
let text4=document.getElementById('txt3');
let d1=document.getElementById('d1');
let d2=document.getElementById('d2');
let d3=document.getElementById('d3');
let d4=document.getElementById('d4');

messagebutton.addEventListener('click',function(){
    sendMessageButton()
      
})
let output=[
    "Please write Something",
    "Please write appropriate @",
    "Please write appropriate .com",
    "Pass must Contain atleast 4 <br> character"
]
function sendMessageButton(){
    if(text1.value.length<3){
     return usingText1(output[0])
        }
       if(text2.value.length<3){
            return usingText2(output[0])

        }
        if(text2.value.indexOf("@")<=3){
           text2.value=output[1];
           text2.classList.add('borderr')
 }
 if(text2.value.indexOf('.com')<=5){
     text2.value=output[2];
     text2.classList.add('borderr')
 }
 if(text3.value.length<=4){
    return usingText3(output[3])
       }
       if(text4.value.length<=4){
        return usingText4(output[0])
           }
else{
    return Alloutput()
}
}
function usingText1(errormessage){
    text1.value=errormessage
    text1.classList.add("borderr")
}
function usingText2(errormessage){
    text2.value=errormessage;
    text2.classList.add("borderr")
    
}
function usingText3(errormessage){
    text3.value=errormessage;
    text3.classList.add('borderr');
}
function usingText4(errormessage){
    text4.value=errormessage;
    text4.classList.add('borderr');
}

function Alloutput(){
    let get=text1.value;
    alert(`Thank you ${get} for your Message`)
    text1.classList.toggle('border2')
    text2.classList.toggle('border2')
    text3.classList.toggle('border2')
    text4.classList.toggle('border2')
    setTimeout(()=>{
        text1.value="";
        text2.value="";
        text3.value="";
        text4.value=""
        
    },5000)
}


let last=document.getElementById('whole-container');
function myfunction(){
    last.style.display="none";
}