const { Model } = require('objection');
const Knex = require('knex');
const config = require('../config');

// Initialize knex.
const knex = Knex({
    client: 'pg',
    connection: {
        host: config.pgHost,
        user: config.pgUser,
        password: config.pgPassword,
        database: config.pgDatabase,
    },
    pool: {
        max: 10,
        idleTimeoutMillis: 3000,
    },
});

// Give the knex instance to objection.
Model.knex(knex);

module.exports = {
    Model,
    knex
};