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
const greenhill=document.getElementById("greenhill");
const shot = document.getElementById("shot");
const chemicalplant=document.getElementById("chemicalplant");
const sky = document.getElementById("skysanctuary");
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
  greenhill.play();
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

        enemy.style.backgroundImage="url(./res/img/bug-attack3.gif)";
        enemy.style.marginTop="100px";
        enemy.style.width="600px";
        enemy.style.marginLeft="40%";
        enemy.style.height="300px";
        hero.onclick= () => {
          numberOfCookies -= cookieIncrease;
          counter.innerHTML = numberOfCookies;
          shot.play();
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
      greenhill.pause();
      fight.style.display="none";
      document.body.style.backgroundImage="none";
      story2.style.display="block";
    }
    begin2.onclick = () => {
      chemicalplant.play();
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
const begin3 = document.getElementById("fightbegin3");

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
        enemy2.style.backgroundImage="url(./res/img/Sprite-0005.gif)";
        enemy2.style.marginTop="100px";
        enemy2.style.width="600px";
        enemy2.style.marginLeft="40%";
        enemy2.style.height="300px";
        hero2.onclick= () => {
          shot.play();
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
      next1.onclick = () => {
        chemicalplant.pause();
        fight2.style.display="none";
        document.body.style.backgroundImage="none";
        story3.style.display="block";
      }
      begin3.onclick = () => {
        sky.play();
        document.body.style.backgroundImage="url(./res/img/Sprite-0002.png)";
        story3.style.display="none";
        fight3.style.display="block";
      }

      const hero3 = document.getElementById("hero3");
const counter5 = document.getElementById("counter5");
const enemy3 = document.getElementById("enemy3");
const counter6 = document.getElementById("counter6");
const start2=document.getElementById("start2");
const death2 = document.getElementById("death2");
const fight3 = document.getElementById("fight3");
const next2 = document.getElementById("next2");
const story3 = document.getElementById("story3");

const killAni2 = () => {
  hero3.style.backgroundPosition="0 101%, center";
  death2.style.opacity = 1;
}

const killAniRest2 = () => {
  hero3.style.backgroundPosition="0 0%, center";
  death2.style.opacity = 0;
}

hero3.addEventListener("mousedown", () => {
  killAni2();
  
});

hero3.addEventListener("touchstart", () => {
  killAni2();
});

hero3.addEventListener("mouseup", () => {
  killAniRest2();
  
});

hero3.addEventListener("touchend", () => {
  killAniRest2();
});
let hp2 = 20;
let damage2 = 1;

let autoClickerIncreasever3 = 1;
let autoClickerIncrease3 = 1;
let numberOfCookiesver3 = 20;

let interval2 = 0;
       start2.onclick = () => {
        enemy3.style.backgroundImage="url(./res/img/Sprite-0001-export.gif)";
        enemy3.style.marginTop="160px";
        enemy3.style.width="470px";
        enemy3.style.marginLeft="45%";
        enemy3.style.height="230px";
        hero3.onclick= () => {
          shot.play();
          hp2 -= damage2;
          counter5.innerHTML = hp2;
          if(hp2<=0){ 
            hero3.style.pointerEvents="none";
            enemy3.style.backgroundImage="none";
            clearInterval(interval2);
            next2.style.display="block";
          }
        }        
        counter5.style.marginTop="-430px"
        start2.style.display="none";
        interval2=setInterval(() => {
          numberOfCookiesver3 -= autoClickerIncreasever3;
          counter6.innerHTML = numberOfCookiesver3;
          if(numberOfCookiesver3<=0){
            clearInterval(interval);
          };
        }, 1000);

      };
      next2.onclick = () => {
        sky.pause();
        fight3.style.display="none";
        document.body.style.backgroundImage="none";
      }
       
       
       
      
        




        
       
       
       
      
        



