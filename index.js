let randomNumber = Math.floor(Math.random() * 100) + 1;

// used for result para div
const guesses=document.querySelector(".guesses");
const lastres=document.querySelector(".lastResult");
const loworhi=document.querySelector(".lowOrHi");

// used to manipulate field and submit button after a guess
const field=document.querySelector("#field");
const submit=document.querySelector("#Submit");

let guessmade=0;
let reset;

function resetgame(){
    guessmade=0;
    guesses.innerHTML="";
    lastres.innerHTML="";
    lastres.className="lastResult";
    loworhi.innerHTML="";
    reset.parentElement.removeChild(reset);
    field.disabled=false;
    submit.disabled=false;
    field.value="";
    field.focus();
    randomNumber=Math.floor(Math.random() * 100) + 1;
}

function gameover(){
    field.disabled=true;
    submit.disabled=true;
    reset=document.createElement("button");
    reset.className="reset";
    reset.textContent="Start a New Game";
    let div=document.querySelector(".resultParas");
    reset.addEventListener("click",resetgame);
    div.appendChild(reset);
}

function check(){
    let guessnum=Number(field.value);
    guessmade++;
    if(guessmade==1){
        guesses.textContent+="Previous Guess:";
    }
    guesses.innerHTML+=" "+guessnum;
    if(guessmade<=10){
        if(guessnum==randomNumber){
            lastres.textContent="Congratulations! You got it right!";
            if(lastres.classList.contains("wrong")){
               lastres.classList.remove("wrong"); 
            }
            lastres.classList.add("correct");
            loworhi.textContent="";
            gameover();
        }
        else{
            lastres.textContent="Wrong!";
            if(lastres.classList.contains("wrong")==false){
                lastres.classList.add("wrong");
            }
            if(guessnum>randomNumber)
                loworhi.textContent="Last guess was high!"
            else
                loworhi.textContent="Last guess was low!";
        }
    }
    else{
        lastres.textContent=`!! GAME OVER !! Correct Answer was ${randomNumber}`;
        gameover();
    }
    field.value="";
    field.focus();//focusses input field after a guess for further guesses
}
submit.addEventListener("click",check);

