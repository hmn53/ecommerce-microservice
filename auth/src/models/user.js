const { Model, knex } = require('./model')

class User extends Model {
    constructor() {
        createSchema();
    }

    static get tableName() {
        return 'users';
    }

}

async function createSchema() {
    if (await knex.schema.hasTable('users')) {
        return;
    }

    await knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('username').checkBetween([4, 10]);
        table.string('password');
        table.enum('role', ['seller', 'buyer'], { useNative: true, enumName: 'role_type' });
    });
}

module.exports = User;