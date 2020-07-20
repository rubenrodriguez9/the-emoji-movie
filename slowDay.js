const day = require('./day.js')

let i = 0

function slowDay(){
       console.clear();
       console.log(day[i]);
       i++;
       if(i >= day.length){
              clearInterval(badDayInterval)
       }


}

const badDayInterval = setInterval(slowDay, 3000)





 