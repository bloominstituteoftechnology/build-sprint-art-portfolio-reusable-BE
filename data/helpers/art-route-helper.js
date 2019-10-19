const db = require('../dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find(){
    return db('art').select('');
}