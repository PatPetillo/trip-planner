const express= require('express');
const router = express.Router();

router.get('/api', function (req, res, next) {
    res.send('api test');
})

module.exports = router;