const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>{
res.send("heloo");
});

router.post('https://ap-south-1.aws.data.mongodb-api.com/app/data-zmfti/endpoint/data/v1',(req,res)=>{
console.log(req.body)
res.json({message : req.body} )
});

module.exports = router;