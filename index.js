
// --------- Getting Element through the id/class----------------
const heading     = document.querySelector('#who');
const diceImg     = document.querySelector('#diceImg');
const p1Score     = document.querySelector('#p1Score');
const p2Score     = document.querySelector('#p2Score');
const pB1         = document.querySelector('#pB1');
const pB2         = document.querySelector('#pB2');
const resetButton = document.querySelector('#reset');
const diceValueP1 = document.querySelector('#diceValueP1');
const diceValueP2 = document.querySelector('#diceValueP2');


// --------- Initial value of the innerHTML----------------
diceImg.setAttribute("src",`./images/Click_reset.png`);
diceValueP1.innerHTML=`${0}`; 
diceValueP2.innerHTML=`${0}`; 

// ---------------- butto diable and enable function ----------------
const  ableBtn=(r,l,c)=> {
    pB1.disabled = r;
    pB2.disabled = l;
    resetButton.disabled=c; 
}
let scorep1 =0;
let scorep2 =0;
const reset =()=>{
    diceImg.setAttribute("src",`./images/Click_Roll_Now.png`);
    let num=Math.floor(Math.random()*10);
     if(num%2==0 || num==0){
        ableBtn(false,true,true);
         heading.innerHTML      ="Player 1 has to Play"; 
         p1Score.innerHTML      =`Your Score : ${scorep1=0}`; 
         p2Score.innerHTML      =`Your Score : ${scorep2=0}`; 
         diceValueP1.innerHTML  =`${0}`; 
         diceValueP2.innerHTML  =`${0}`;    
     }
     else { 
         ableBtn(true,false,true); 
         heading.innerHTML     ="Player 2 has to Play";
         p1Score.innerHTML     =`Your Score : ${scorep1=0}`;
         p2Score.innerHTML     =`Your Score : ${scorep2=0}`; 
         diceValueP1.innerHTML =`${0}`; 
         diceValueP2.innerHTML =`${0}`;
     }
 }

 // --------player-1 dice function----------------
 const randomNumber1 =()=>{
    let dice =Math.floor(Math.random()*(6)+1);
    currentScore1(dice); 
    } 
// --------player-2 dice function----------------   
const randomNumber2 =()=>{ 
    let dice =Math.floor(Math.random()*(6)+1);
    currentScore2(dice); 
    }   

// ---------------- player-1 score function ----------------

const currentScore1=(dice)=>{
    p1Score.innerHTML     =`Your Score : ${scorep1}`; 
    scorep1+=dice;
    if (scorep1 !== 40 && scorep1< 40){
        p1Score.innerHTML      = `Your Score : ${scorep1}`
        ableBtn(true,false,true);
        diceImg.setAttribute("src",`./images/${dice}.png`);
        diceValueP1.innerHTML  = `${dice}`;
        heading.innerHTML      = "Player 2 has to Play"; 
        p1Score.innerHTML      = `Your Score : ${scorep1}`;     
  }
   else if(scorep1 >= 40){
       ableBtn(true,true,false);
       diceImg.setAttribute("src",`./images/Click_reset.png`);
       p1Score.innerHTML   =`Your Score : ${scorep1}`;
       heading.innerHTML   =`plyer one won first score ${scorep1}`;   
   }  
}
// ---------------- player-2 dice function ----------------

const currentScore2=(dice)=>{
    p2Score.innerHTML     =`Your Score : ${scorep2}`;
  
    scorep2+=dice;
    if (scorep2!==40 && scorep2 < 40){
        ableBtn(false,true,true);
        diceImg.setAttribute("src",`./images/${dice}.png`);
        heading.innerHTML       = "Player 1 has to Play"; 
        diceValueP2.innerHTML   = `${dice}`;
        p2Score.innerHTML       = `Your Score : ${scorep2}`;
   }
    else if(scorep2 >= 40) {
        ableBtn(true,true,false);
        diceImg.setAttribute("src",`./images/Click_reset.png`);
        p2Score.innerHTML       =`Your Score :  ${scorep2}`;
        heading.innerHTML       =`Congratulation 🎉 plyer Two won first score ${scorep2}`;   
    }
}

    
  
  

  
