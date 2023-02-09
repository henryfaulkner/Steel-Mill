var express = require('express');
var router = express.Router();

/* GET random weather forecast. */
router.get('/random', function(req, res, next) {
    let skyConditionArr = ["Sunny", "Cloudy", "Windy", "Rain", "Tornado!"]
    let skyCondition = skyConditionArr[Math.floor(Math.random() * 5)]

    let tempCondition = Math.floor(Math.random() * 100)

    res.send(`${skyCondition} and ${tempCondition}`);
});

module.exports = router;
