let boxes=document.querySelectorAll(".box")
let btn=document.querySelector("#btn")
let btn0=document.querySelector("#btn0")
let mescontainer=document.querySelector(".mes-container")
let msg=document.querySelector("#msg")
let turn0=true;// palyerx,playero
//2d array
const winPatterns=
[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetGame=()=>{
    turn0=true;
enable();
mescontainer.classList.add("hidden")
}
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        
        if(turn0){
        box.innerText="x"
        box.style.color="blue"
        turn0=false;
        }
        else{
            box.innerText="o"
            box.style.color="green"
            turn0=true;
        }
        box.disabled=true
checkWinner();
    
    })
}) 
const disabled=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
    const enable=()=>
        {
            for(let box of boxes)
            {
                box.disabled=false;
                box.innerText="";
            }
        }
const showWinner=(winner)=>
{
    msg.innerText=`congratulations, winner is ${winner}`;
    mescontainer.classList.remove("hide");
    disabled();

}

const checkWinner=()=>
{
   for(let pattern of winPatterns) 
   {
//     console.log(pattern[0],pattern[1],pattern[2])
//     console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
//    }
   let pos1=boxes[pattern[0]].innerText
   let pos2=boxes[pattern[1]].innerText
   let pos3=boxes[pattern[2]].innerText
   if(pos1!=""&&pos2!=""&&pos3!="")
   {
    if(pos1===pos2&&pos2===pos3){
        console.log(" winner is " ,pos1)
        showWinner(pos1);
    }
   }
}
}
btn0.addEventListener("click",resetGame)
btn.addEventListener("click",resetGame)


