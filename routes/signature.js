var express = require('express');
var router = express.Router();
const fs = require('fs')
const signatures = JSON.parse(fs.readFileSync('./signature.json', 'utf8'));//require('./../signature.json')

/* GET users listing. */
router.get('/', function (req, res, next) {
    const {address} = req.query
    if (address === undefined) {
        res.status(400)
        return res.send({message: 'address not defined'})
    }

    const signatue = signatures[address]
    if (signatue === undefined) {
        res.status(400)
        return res.send({message: 'address not found'})
    }

    res.send({message: signatue})
});

module.exports = router;
