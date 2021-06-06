import { formatError } from "./utils.js"; 

    let val = document.getElementById('time');
    let el = document.querySelector(".myclass");
    let tik = 0;
export  function clearTimer() {
        clearInterval(intervalId);
        el.innerHTML = tik;
        tik = 0;
        };
export function intervalId (){ setTimeout( function tick () {
      
        if (+val.value > tik) {
            el.innerHTML = tik;
            tik ++;
            intervalId = setTimeout(tick, 1000);
           if (+val.value < (tik+3)) {
            new Audio('./sound/beep.mp3').play()
           } ;
        } else if(+val.value < 0 ) {  
            el.innerHTML =  formatError("введите положительное число")
        } else if(+val.value <= tik ) {
            clearInterval(intervalId);
            el.innerHTML =  `<p>время вышло</p>`;
            tik = 0;
        };

    }, 1000);

 } ;

 