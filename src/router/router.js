const express = require('express')
const router = require('express').Router();
const axios = require('axios');


router.get('/', async(req, res) => {
    try{
const test = await axios(" https://www.azlyrics.com/lyrics/justinbieber/holy.html");
res.send(test.data)

    }
    catch(e){
        res.send(e);
    }
});

module.exports=router;