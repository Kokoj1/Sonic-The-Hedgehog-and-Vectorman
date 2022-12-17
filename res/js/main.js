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
const begin2 = document.getElementById("fightbegin2");
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
        counter.style.marginTop="-440px";
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
    begin2.onclick = () => {
      document.body.style.backgroundImage="url(./res/img/chemical-plant-zone.png)";
      story2.style.display="none";
      fight2.style.display="block";
    }
    
const hero2 = document.getElementById("hero2");
const counter3 = document.getElementById("counter3");
const enemy2 = document.getElementById("enemy2");
const counter4 = document.getElementById("counter4");
const start1=document.getElementById("start1");
const death1 = document.getElementById("death1");
const fight2 = document.getElementById("fight2");
const next1 = document.getElementById("next1");

const killAni1 = () => {
  hero2.style.backgroundPosition="0 101%, center";
  death1.style.opacity = 1;
}

const killAniRest1 = () => {
  hero2.style.backgroundPosition="0 0%, center";
  death1.style.opacity = 0;
}

hero2.addEventListener("mousedown", () => {
  killAni1();
  
});

hero2.addEventListener("touchstart", () => {
  killAni1();
});

hero2.addEventListener("mouseup", () => {
  killAniRest1();
  
});

hero2.addEventListener("touchend", () => {
  killAniRest1();
});
let hp = 20;
let damage = 1;

let autoClickerIncreasever1 = 1;
let autoClickerIncreasever2 = 1;
let numberOfCookiesver2 = 20;

let interval1 = 0;
       start1.onclick = () => {
        counter3.style.marginTop="-440px";
        hero2.onclick= () => {
          hp -= damage;
          counter3.innerHTML = hp;
          if(hp<=0){ 
            hero2.style.pointerEvents="none";
            enemy2.style.backgroundImage="none";
            clearInterval(interval1);
            next1.style.display="block";
          }
        }        
        counter3.style.marginTop="-450px"
        start1.style.display="none";
        interval1=setInterval(() => {
          numberOfCookiesver2 -= autoClickerIncreasever1;
          counter4.innerHTML = numberOfCookiesver2;
          if(numberOfCookiesver2<=0){
            clearInterval(interval1);
          };
        }, 1000);

      };


       
       
       
      
        




        
       
       
       
      
        



