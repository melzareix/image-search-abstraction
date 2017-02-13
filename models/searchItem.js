const mongoose = require('mongoose');
const searchItemSchema = mongoose.Schema({
    term: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SearchItem', searchItemSchema);