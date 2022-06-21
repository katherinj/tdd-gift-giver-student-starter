const express = require("express")
const { BadRequestError } = require("../utils/errors")
const router = express.Router()


router.get("/", async (req,res,next) => {
    res.status(200).json() 
})

router.post("/pairs", async(req,res,next) => {
    try{
        if(req.body.names){
            res.status(200).json()
        }else{
            next(BadRequestError)
        }
    }catch(err){
        next(BadRequestError)
    }
})

router.post("/traditional", async(req,res,next) => {
    try{
        res.status(200).json()
    }catch(err){
        next(BadRequestError)
    }
}) 

module.exports = router 