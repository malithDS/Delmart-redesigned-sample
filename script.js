/*---- small screen nav bar ----*/
var sidemenu = document.getElementById("sidemenu-mobile");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}



var conten1 = document.getElementById('content1');  
var conten2 = document.getElementById('content2');  
var conten3 = document.getElementById('content3');  
var conten4 = document.getElementById('content4');  
var btn1 = document.getElementById('btn1');  
var btn2 = document.getElementById('btn2');  
var btn3 = document.getElementById('btn3');  
var btn4 = document.getElementById('btn4'); 
function tab1(){  
     conten1.style.transform='translateX(0px)';  
     conten2.style.transform='translateX(100%)';  
     conten3.style.transform='translateX(100%)'; 
     conten4.style.transform='translateX(100%)'; 
}  
btn1.addEventListener('click',function(){  
          btn1.classList.add('active');  
          btn2.classList.remove('active');  
          btn3.classList.remove('active'); 
          btn4.classList.remove('active');  
     });  
function tab2(){  
     conten2.style.transform='translateX(0px)';  
     conten1.style.transform='translateX(100%)';  
     conten3.style.transform='translateX(100%)';
     conten4.style.transform='translateX(100%)';    
}  
btn2.addEventListener('click',function(){  
          btn2.classList.add('active');  
          btn1.classList.remove('active');  
          btn3.classList.remove('active');  
          btn4.classList.remove('active'); 
     });  
function tab3(){  
     conten3.style.transform='translateX(0px)';  
     conten2.style.transform='translateX(100%)';  
     conten1.style.transform='translateX(100%)';  
     conten4.style.transform='translateX(100%)'; 
}  
btn3.addEventListener('click',function(){  
          btn3.classList.add('active');  
          btn1.classList.remove('active');  
          btn2.classList.remove('active'); 
          btn4.classList.remove('active');  
     });  

function tab4(){  
     conten4.style.transform='translateX(0px)';  
     conten3.style.transform='translateX(100%)'; 
     conten2.style.transform='translateX(100%)';  
     conten1.style.transform='translateX(100%)';  
}  
btn4.addEventListener('click',function(){  
          btn4.classList.add('active');  
          btn1.classList.remove('active');  
          btn2.classList.remove('active'); 
          btn3.classList.remove('active');  
});  
     