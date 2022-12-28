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
const begin5 = document.getElementById("fightbegin5");
const greenhill=document.getElementById("greenhill");
const shot = document.getElementById("shot");
const chemicalplant=document.getElementById("chemicalplant");
const sky = document.getElementById("skysanctuary");
const icecap = document.getElementById("icecap");
const gameover = document.getElementById("gameover");
const final = document.getElementById("final");
const back = document.getElementById("back");
const over = document.getElementById("over");
const startbutton1 = document.getElementById("startbutton1");
const logo = document.getElementById("logo");
const titlesong = document.getElementById("titlesong");
const quidebutton = document.getElementById("quidebutton");
const quide = document.getElementById("quide");
const backquide = document.getElementById("backquide");

startbutton1.onclick = () =>{
  menu.style.display="Block";
  logo.style.display="none";
  titlesong.play();
}
quidebutton.onclick = () =>{
  menu.style.display="none";
  document.body.style.backgroundImage="none";
  quide.style.display="flex";
}
backquide.onclick = () => {
  window.location.reload();
}
back.onclick = () =>{
  window.location.reload();
}

let numberOfCookies = 30;
let cookieIncrease = 3;

startgame.onclick = () =>{
  menu.style.display="none";
story.style.display="block";
titlesong.pause();
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
let numberOfCookies2 = 50;

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
            fight.style.display="none";
            document.body.style.backgroundImage="none";
            gameover.style.display="block";
            greenhill.pause();
            over.play();

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
let hp = 150;
let damage = 3;

let autoClickerIncreasever1 = 1;
let autoClickerIncreasever2 = 1;
let numberOfCookiesver2 = 50;

let interval1 = 0;
       start1.onclick = () => {
        enemy2.style.backgroundImage="url(./res/img/mecha-sonicattack.gif)";
        enemy2.style.marginTop="96px";
        enemy2.style.width="500px";
        enemy2.style.marginLeft="47%";
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
            fight2.style.display="none";
            document.body.style.backgroundImage="none";
            gameover.style.display="block";
            chemicalplant.pause();
            over.play();
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
const begin4 = document.getElementById("fightbegin4");
const enemyc = document.getElementById("enemyc");
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
let hp2 = 240;
let damage2 = 3;

let autoClickerIncreasever3 = 1;
let autoClickerIncrease3 = 1;
let numberOfCookiesver3 = 50;

let interval2 = 0;
       start2.onclick = () => {
        enemy3.style.backgroundImage="url(./res/img/Sprite-0001-export.gif)";
        enemy3.style.marginTop="120px";
        enemy3.style.width="466px";
        enemy3.style.marginLeft="-44%";
        enemy3.style.height="230px";
        enemyc.style.marginTop="25px";
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
            clearInterval(interval2);
            fight3.style.display="none";
            document.body.style.backgroundImage="none";
            gameover.style.display="block";
            sky.pause();
            over.play();
          };
        }, 1000);

      };
      next2.onclick = () => {
        sky.pause();
        fight3.style.display="none";
        document.body.style.backgroundImage="none";
        story4.style.display="block";
      }
      begin4.onclick = () => {
        icecap.play();
        document.body.style.backgroundImage="url(./res/img/icecap.png)";
        story4.style.display="none";
        fight4.style.display="block";
      }

      const story4 = document.getElementById("story4");
const hero4 = document.getElementById("hero4");
const counter7 = document.getElementById("counter7");
const enemy4 = document.getElementById("enemy4");
const counter8 = document.getElementById("counter8");
const start3=document.getElementById("start3");
const death3 = document.getElementById("death3");
const fight4 = document.getElementById("fight4");
const next3 = document.getElementById("next3");
const enemyc2 = document.getElementById("enemyc2");
const story5 = document.getElementById("story5"); 

const killAni3 = () => {
  hero4.style.backgroundPosition="0 101%, center";
  death3.style.opacity = 1;
}

const killAniRest3 = () => {
  hero4.style.backgroundPosition="0 0%, center";
  death3.style.opacity = 0;
}

hero4.addEventListener("mousedown", () => {
  killAni3();
  
});

hero4.addEventListener("touchstart", () => {
  killAni3();
});

hero4.addEventListener("mouseup", () => {
  killAniRest3();
  
});

hero4.addEventListener("touchend", () => {
  killAniRest3();
});

let hp3 = 300;
let damage3 = 3;

let autoClickerIncreasever4 = 1;
let autoClickerIncrease4 = 1;
let numberOfCookiesver4 = 50;

let interval3 = 0;
       start3.onclick = () => {
        enemy4.style.backgroundImage="url(./res/img/metal-sonicatt-export.gif)";
        enemy4.style.marginTop="108px";
        enemy4.style.width="528px";
        enemy4.style.marginLeft="40%";
        enemy4.style.height="300px";
        enemyc2.style.marginTop="30px";
        hero4.onclick= () => {
          shot.play();
          hp3 -= damage3;
          counter7.innerHTML = hp3;
          if(hp3<=0){ 
            hero4.style.pointerEvents="none";
            enemy4.style.backgroundImage="none";
            clearInterval(interval3);
            next3.style.display="block";
          }
        }        
        counter7.style.marginTop="-450px"
        start3.style.display="none";
        interval3=setInterval(() => {
          numberOfCookiesver4 -= autoClickerIncreasever4;
          counter8.innerHTML = numberOfCookiesver4;
          if(numberOfCookiesver4<=0){
            clearInterval(interval3); 
            fight4.style.display="none";
            document.body.style.backgroundImage="none";
            gameover.style.display="block";
            icecap.pause();
            over.play();
          };
        }, 1000);

      };
      next3.onclick = () => {
        icecap.pause();
        fight4.style.display="none";
        document.body.style.backgroundImage="none";
        story5.style.display="block";
      }
      begin5.onclick = () => {
        final.play();
        document.body.style.backgroundImage="url(./res/img/deathegg2.png)";
        story5.style.display="none";
        fight5.style.display="block";
      }

          
const hero5 = document.getElementById("hero5");
const counter9 = document.getElementById("counter9");
const enemy5 = document.getElementById("enemy5");
const counter10 = document.getElementById("counter10");
const death4 = document.getElementById("death4");
const fight5 = document.getElementById("fight5");
const next4 = document.getElementById("next4");
const start4 = document.getElementById("start4");
const enemycounter = document.getElementById("enemycounter");
const ending = document.getElementById("ending");
const killAni4 = () => {
  hero5.style.backgroundPosition="0 101%, center";
  death4.style.opacity = 1;
}

const killAniRest4 = () => {
  hero5.style.backgroundPosition="0 0%, center";
  death4.style.opacity = 0;
}

hero5.addEventListener("mousedown", () => {
  killAni4();
  
});

hero5.addEventListener("touchstart", () => {
  killAni4();
});

hero5.addEventListener("mouseup", () => {
  killAniRest4();
  
});

hero5.addEventListener("touchend", () => {
  killAniRest4();
});
let hp4 = 800;
let damage4 = 3;

let autoClickerIncreasever5 = 1;
let autoClickerIncrease5 = 1;
let numberOfCookiesver5 = 50;

let interval4 = 0;
       start4.onclick = () => {
        enemy5.style.backgroundImage="url(./res/img/deatheggatt.gif)";
        enemy5.style.marginTop="164px";
        enemy5.style.width="800px";
        enemy5.style.marginLeft="-20%";
        enemy5.style.height="600px";
enemycounter.style.marginTop="-818px";
        hero5.onclick= () => {
          shot.play();
          hp4 -= damage4;
          counter9.innerHTML = hp4;
          if(hp4<=0){ 
            hero5.style.pointerEvents="none";
            enemy5.style.backgroundImage="none";
            clearInterval(interval4);
            next4.style.display="block";
          }
        }        
        counter9.style.marginTop="-450px"
        start4.style.display="none";
        interval4=setInterval(() => {
          numberOfCookiesver5 -= autoClickerIncreasever5;
          counter10.innerHTML = numberOfCookiesver5;
          if(numberOfCookiesver5<=0){
            clearInterval(interval4);
            fight5.style.display="none";
            document.body.style.backgroundImage="none";
            gameover.style.display="block";
            final.pause();
            over.play();
          };
        }, 1000);

      };
      next4.onclick = () => {
        final.pause();
        fight5.style.display="none";
        document.body.style.backgroundImage="none";
        ending.style.display="block";
      }
      const titlesong2 = document.getElementById("titlesong2");
      const greenhill2=document.getElementById("greenhill2");
const chemicalplant2=document.getElementById("chemicalplant2");
const sky2 = document.getElementById("skysanctuary2");
const icecap2 = document.getElementById("icecap2");
const gameover2 = document.getElementById("over2");
const final2 = document.getElementById("final2");
      const restart = document.getElementById("restart");
      const restart2 = document.getElementById("restart2");
      const jukebox = document.getElementById("jukebox");
      const music = document.getElementById("music");
      const play = document.getElementById("play");
const pause = document.getElementById("pause");
const play2 = document.getElementById("play2");
const pause2 = document.getElementById("pause2");
const play3 = document.getElementById("play3");
const pause3 = document.getElementById("pause3");
const play4 = document.getElementById("play4");
const pause4 = document.getElementById("pause4");
const play5 = document.getElementById("play5");
const pause5 = document.getElementById("pause5");
const play6 = document.getElementById("play6");
const pause6 = document.getElementById("pause6");
const play7 = document.getElementById("play7");
const pause7 = document.getElementById("pause7");
restart.onclick = () =>{
        window.location.reload();
      }
      restart2.onclick = () =>{
        window.location.reload();
      }
      jukebox.onclick = () => {
        ending.style.display="none";
        music.style.display="block";
      }
play.onclick = () => {
  greenhill2.play();
}
pause.onclick = () => {
  greenhill2.pause();
}
play2.onclick = () => {
 chemicalplant2.play();
}
pause2.onclick = () => {
  chemicalplant2.pause();
}
play3.onclick = () => {
  sky2.play();
 }
 pause3.onclick = () => {
   sky2.pause();
 }
 play4.onclick = () => {
  icecap2.play();
 }
 pause4.onclick = () => {
   icecap2.pause();
 }
 play5.onclick = () => {
  final2.play();
 }
 pause5.onclick = () => {
   final2.pause();
 }
 play6.onclick = () => {
  gameover2.play();
 }
 pause6.onclick = () => {
   gameover2.pause();
 }
 play7.onclick = () => {
  titlesong2.play();
 }
 pause7.onclick = () => {
   titlesong2.pause();
 }

       
       
      
        




        
       
       
       
      
        



