const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')


router.get('/transactions', function (req, res) {
    Transaction.find({}).exec(function (err, data) {
        res.send(data)
    })
})

    router.post('/transaction', function (req, res) {
        let transaction = new Transaction(req.body)
        transaction.save()
        res.end()
    })


module.exports = router