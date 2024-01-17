const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        require:true,
    },
    email: {
        type:String,
        trim:true,
        require:true,
        unique:true,
    },
    phone: {
        type:Number,
        trim:true,
        require:true,
    },
    active: {
        type:Boolean,
        require:true,
    },
});

module.exports = mongoose.model("Task",taskSchema);