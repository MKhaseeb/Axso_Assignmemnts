const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.post('/api/Author', AuthorController.createAuthor);
    app.get('/api/Author/:id', AuthorController.getAuthor);
    app.patch('/api/Author/:id', AuthorController.updateAuthor);
    app.delete('/api/Author/:id', AuthorController.deleteAuthor);
}