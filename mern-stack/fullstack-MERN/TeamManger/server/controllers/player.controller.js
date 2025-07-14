const { Player } = require('../models/player.model');

module.exports.index = (request, response) => {
    Player.find()
        .then(allPlayers => response.json(allPlayers))
        .catch(err => response.status(400).json(err));
};

module.exports.createPlayer = (request, response) => {
    const {name,pose } = request.body;
    Player.create({
        name,
        pose
    })
    .then(Player => response.json(Player))
    .catch(err => response.status(400).json(err));
};

module.exports.getPlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(Player => response.json(Player))
        .catch(err => response.json(err))
}


module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.json(err))
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}