let day = require('./day.js')

let i = 0;

const timeMaster = function(){
    console.clear();
    console.log(day[i]);
    i++;
    if(i >= day.length){
        clearInterval(timeController)
    }
}


const timeController = setInterval(timeMaster, process.argv[2])