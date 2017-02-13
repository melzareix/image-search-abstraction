const express = require('express');
const mongoose = require('mongoose');
const imagesClient = require('google-images');
const router = express.Router();

const cseId = '012754357838355856632:q_6qifbv5au';
const apiKey = 'AIzaSyA9SSLNYAqpSad5kz19alsATTFAzM2t-oA';

const searchClient = new imagesClient(cseId, apiKey);

router.get('/search/:searchtext', function (req, res, next) {
    const searchtext = req.params.searchtext;
    var offset = req.query.offset;
    var page = 1;

    if (typeof offset === 'string') { // Check for a single offset
        offset = parseInt(offset);
        if (!isNaN(offset)) {
            page = offset;
        }
    }
    searchClient.search(searchtext, {
            page: page
        })
        .then(function (images) {
            res.json(images);
        }).catch(function (err) {
            next(err);
        });
});


router.use(function (err, req, res, next) {
    res.json({
        status: err.toString()
    });
});
module.exports = router;