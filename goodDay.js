let day = require('./day.js')




let i = day.length -1

const goodie = function(){
    console.clear();
    console.log(day[i]);
    i--;
    if(i < 0){
        clearInterval(goodDayz)
    }

}



const goodDayz = setInterval(goodie, 1000)







