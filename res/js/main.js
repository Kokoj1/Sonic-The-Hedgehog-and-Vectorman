const num = document.getElementById("num");
const hero = document.getElementById("hero");
const counter = document.getElementById("counter");
const enemy = document.getElementById("enemy");
const counter2 = document.getElementById("counter2");
const start=document.getElementById("start");
const death = document.getElementById("death");
const startgame = document.getElementById("startbutton");
const menu = document.getElementById("menu");
const fight = document.getElementById("fight");
const story = document.getElementById("story");
const begin = document.getElementById("fightbegin");
const next = document.getElementById("next");
const story2 = document.getElementById("story2");
let numberOfCookies = 20;
let cookieIncrease = 1;

startgame.onclick = () =>{
  menu.style.display="none";
story.style.display="block";
}
begin.onclick = () => {
  document.body.style.backgroundImage="url(./res/img/greenhill.gif)";
  story.style.display="none";
  fight.style.display="block";
}
const killAni = () => {
  hero.style.backgroundPosition="0 101%, center";
  death.style.opacity = 1;
}

const killAniRest = () => {
  hero.style.backgroundPosition="0 0%, center";
  death.style.opacity = 0;
}

hero.addEventListener("mousedown", () => {
  killAni();
  
});

hero.addEventListener("touchstart", () => {
  killAni();
});

hero.addEventListener("mouseup", () => {
  killAniRest();
  
});

hero.addEventListener("touchend", () => {
  killAniRest();
});

let autoClickerIncrease = 1;
let autoClickerIncrease2 = 1;
let numberOfCookies2 = 20;

let interval = 0;
       start.onclick = () => {
        hero.onclick= () => {
          numberOfCookies -= cookieIncrease;
          counter.innerHTML = numberOfCookies;
          if(numberOfCookies<=0){ 
            hero.style.pointerEvents="none";
            enemy.style.backgroundImage="none";
            clearInterval(interval);
            next.style.display="block";
          }
        }        
        counter.style.marginTop="-440px"
        start.style.display="none";
        interval=setInterval(() => {
          numberOfCookies2 -= autoClickerIncrease;
          counter2.innerHTML = numberOfCookies2;
          if(numberOfCookies2<=0){
            clearInterval(interval);
          };
        }, 1000);

      };
    next.onclick = () => {
      fight.style.display="none";
      document.body.style.backgroundImage="none";
      story2.style.display="block";
    }
        
       
       
       
      
        



