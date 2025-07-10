const JokeController = require('../controllers/joke.controller');

module.exports = app => {

    app.get('/api/Jokes', JokeController.findAllJokes);
    app.get('/api/Jokes/:id', JokeController.findOneSingleJoke);
    app.patch('/api/Jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/Jokes', JokeController.createNewJoke);
    app.delete('/api/Jokes/:id', JokeController.deleteAnExistingJoke);

}