const express = require("express")
const { BadRequestError } = require("../utils/errors")
const router = express.Router()
const GiftExchange = require("../models/gift-exchange")

router.get("/", async (req,res,next) => {
    res.status(200).json() 
})

router.post("/pairs", async(req,res,next) => {
    try{
        if(req.body.names){
            const pairs = await GiftExchange.pairs(req.body.names)
            res.status(200).json(pairs)
        }else{
            throw new BadRequestError
        }
    }catch(err){
        next(err)
    }
})

router.post("/traditional", async(req,res,next) => {
    try{
        if(req.body.names){
            const traditional = await GiftExchange.traditional(req.body.names)
            res.status(200).json(traditional)
        }else{
            throw new BadRequestError
        }
    }catch(err){
        next(err)
    }
}) 
module.exports = router 