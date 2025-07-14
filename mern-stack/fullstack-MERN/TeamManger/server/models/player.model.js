const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    name: { type: String ,
        required: [
            true,
            "Name is required"
        ]
    },
    pose: { type: String ,
        required: [
            true,
            "Pose is required"
        ]
    },
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);