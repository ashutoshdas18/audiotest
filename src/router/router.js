const express = require('express')
const router = require('express').Router();
const axios = require('axios');
const days={
        1:'Mon',
        2:'Tue',
        3:'wed',
        4:'Thu',
        5:'Fri',
        6:'Sat',
        7:'Sun'
    }
    const month={
        1:'Jan',
        2:'Feb',
        3:'Mar',
        4:'Apr',
        5:'May',
        6:'Jun',
        7:'Jul',
        8:'Aug',
        9:'Sep',
        10:'Oct',
        11:'Nov',
        12:'Dec'
    }
    const day = new Date();
    const fullYear = `${days[day.getDay().toString()]}, ${day.getDate().toString()} ${month[day.getMonth().toString()]} ${day.getFullYear().toString()} ${day.getUTCHours().toString()}:${day.getUTCMinutes().toString()}:${day.getUTCSeconds().toString()} GMT`
console.log(day.getDay())

router.get('/', async(req, res) => {
    const config={
        headers:{
             'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Mobile Safari/537.36 Edg/86.0.622.51',
            'Connection':'keep-alive',
            'Accept':'*/*',
            'Content-Encoding':'gzip',
            'Transfer-Encoding':'chunked',
            'Server':'ngix',
            'Date':fullYear

        }
    }
    try{
const test = await axios(" https://www.azlyrics.com/lyrics/justinbieber/holy.html",config);
res.send(test.data)

    }
    catch(e){
        res.send(e);
    }
});
router.get('/date', (req, res) => {
    
    res.send(fullYear)
});

module.exports=router;