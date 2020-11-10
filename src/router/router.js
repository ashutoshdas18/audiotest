const express = require('express')
const router = require('express').Router();
const axios = require('axios');


router.get('/', async(req, res) => {
    const config={
        headers:{
             'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Mobile Safari/537.36 Edg/86.0.622.51',


        }
    }
    try{
const test = await axios(" https://www.azlyrics.com/lyrics/justinbieber/holy.html");
res.send(test.data)

    }
    catch(e){
        res.send(e);
    }
});

module.exports=router;