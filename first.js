let nev=document.getElementById("click");

let disp=true;
function fun(){
   
    if(disp){
    nev.style.display="flex";
    disp=false;
    console.log("success");
    }
    else{
        nev.style.display="none";
        disp=true;
    }

}

let op=document.querySelectorAll('.my');
let i=1;
function deep(val){
    
    if(i===1){
        val.style.display="block";
        i=0
    }
    else{
        val.style.display="none";
        i=1
    }
}



let plus=document.querySelectorAll('#plus');
plus.forEach((val)=>{
    val.addEventListener('click',()=>{
       if(i===1){
        val.innerHTML="+";
       }
       else{
        val.innerHTML="-";
       }
    })
})

//--------
let oheight=window.outerWidth;
let turn=document.getElementById("turn");
function outter(){
    if(oheight<=412){
        let img=document.createElement("img");
        img.setAttribute("src","./deepanshu.jpeg");
        let phone=document.querySelector(".phoneInfo");
        phone.firstElementChild(img);
        turn.style.display="none";

    }
    
}
outter();

//reload remove
function relod(e){
    e.preventDefault();

}
