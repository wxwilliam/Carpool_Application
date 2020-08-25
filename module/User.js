const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    startloc: {
        type: String,
        require: true
    },
    arriveloc: {
        type: String,
        require: true
    },
    date: {
        type: Date
    },
    time: {
        type: String,
        require: true
    },
    detail: {
        type: String,
        require: true
    },
});
mongoose.model('user', UserSchema,'Posts');