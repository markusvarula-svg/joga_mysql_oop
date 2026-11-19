const BaseSQLModel = require('./base');

class AuthorModel extends BaseSQLModel {
    constructor() {
        super('author');
    }

    async findAll() {
        const authors = await super.findAll()
        return authors
    }

    async findOne(id) {
        const author = await super.findOne('id', id)
        return author
    }

    async findAuthorArticles(id) {
        const author = await this.findOne(id)
        const articles = await articleModel.findMany(author.id)
        author['articles'] = articles
        return author
    }
}

module.exports = AuthorModel;