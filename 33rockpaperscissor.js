

const choices=['rock','paper','scissor']
const playerresult=document.getElementById("playerchoice")
const computerresult=document.getElementById("computerchoice")
const result=document.getElementById("result")
const playerscore=document.getElementById("playerscore")
const computerscore=document.getElementById("computerscore")
let pscorecount=0
let cscorecount=0

let resulttext

function playgame(playerchoice){
    let computerchoice=choices[Math.floor(Math.random()*3)]
    console.log(computerchoice)
    if(playerchoice===computerchoice){
        resulttext="It's a Tie"
    }
    else{
        switch(playerchoice){
            case 'rock':
                resulttext=(computerchoice==='scissor')?"You Win":"You Lose"
                break
            case 'paper':
                resulttext=(computerchoice==='rock')?"You Win":"You Lose"
                break
            case 'scissor':
                resulttext=(computerchoice==='paper')?"You Win":"You Lose"
                break
        }
    }
    playerresult.textContent=`Player:${playerchoice}`
    computerresult.textContent=`Computer:${computerchoice}`
    result.textContent=`${resulttext}`

    result.classList.remove('greencolor','redcolor')
    switch(resulttext){
        case 'You Win':
            result.classList.add("greencolor")
            pscorecount++
            playerscore.textContent=`${pscorecount}`
            break
        case 'You Lose':
            result.classList.add("redcolor")
             cscorecount++
            computerscore.textContent=`${cscorecount}`
            break
    }

}