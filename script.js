let boxes=document.querySelectorAll(".box");
let resetbtn=document.getElementById('reset-btn');
let msgContainer=document.querySelector(".msg-container")
let newGamebtn=document.querySelector("#new-btn")
let msg=document.querySelector("#msg")

let turnO=true; //playerO, playerX

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// 6
const restGame=()=>{
    turnO=false;
    enableBoxes();
    msgContainer.classList.add("hide")
}
// 4
const disableBoxes=()=>{
    for (let box of boxes) {
        box.disabled=true;
    }
}
// 5
const enableBoxes=()=>{
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}

// 1
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})
// 3
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
}

// 2
const checkWinner=()=>{
    for (let pattern of winPatterns){
       
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner", pos1Val);
                disableBoxes();
                showWinner(pos1Val);
            }
        }
    }
}

newGamebtn.addEventListener("click",restGame)
resetbtn.addEventListener("click",restGame)