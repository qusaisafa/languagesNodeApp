const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguage');

router.get('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

router.post('/language', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.create(req.body))
    } catch (err) {
        console.error(`Error while inserting programming languages `, err.message);
        next(err);
    }
});


module.exports = router;


