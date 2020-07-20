 const day = require('./day.js')

let i = 0

function badDay(){
       console.clear();
       console.log(day[i]);
       i++;
       if(i >= day.length){
              clearInterval(badDayInterval)
       }


}

const badDayInterval = setInterval(badDay, 1000)





 