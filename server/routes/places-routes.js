import express from 'express'

const router = express.Router();

router.get('/', (req,res,next)=>{
    console.log('get request in places')
    res.json({messaage: 'it works!'});
});


module.exports = router; 