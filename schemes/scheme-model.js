const db = require('../data/db-config.js');

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

function add(user) {
    return db('schemes')
        
}

function update(changes, id) {

}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del();
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}