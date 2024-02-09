"use strict";
let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#Reset-btn");
let win=document.querySelector(".winner");
let start_button=document.querySelector(".start-btn");
let msg_win=document.querySelector("#msg");
let turn0=true;

let arr1=[];
let arr2=[];


let winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

boxes.forEach(
    function(abc){
        abc.addEventListener("click",function(){
            if(turn0){
                abc.innerHTML="0";

                turn0=false;
            }else{
                abc.innerHTML="X";
                turn0=true;
            }
            abc.disabled=true;
            checkWinner();
        })
    }
)

let checkWinner=function(){
    for(let element of winPatterns){
        
        if(boxes[element[0]].innerText==="X" && boxes[element[1]].innerText==="X" && boxes[element[2]].innerText==="X"){
            let value="X";
            winner(value);
        
        } else if(boxes[element[0]].innerText==="0" && boxes[element[1]].innerText==="0" && boxes[element[2]].innerText==="0"){
            let value="0";
            winner(value);
        }
    }

}

let winner=function(value){
    for(let element of boxes){
        element.disabled=true; 

    }
    win.classList.remove("hide");
    msg_win.innerHTML=`Congratulations!! Winner is ${value}`

    
    
}

start_button.addEventListener("click",()=>{
    for(let element of boxes){
        element.disabled=false;
        element.innerText="";
        
    }
    win.classList.add("hide");
})

reset_btn.addEventListener("click",()=>{
    for(let element of boxes){
        element.disabled=false;
        element.innerText="";
        
    }
    win.classList.add("hide");
    
})