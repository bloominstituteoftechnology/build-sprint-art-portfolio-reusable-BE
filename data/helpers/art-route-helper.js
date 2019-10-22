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
    return db('artwork').select('id', 'images', 'artistID');
}

function findBy(filter){
    return db('artwork').where(filter);
}

async function add(images){
    const [id] = await db('artwork').insert(images);
    return findById(id);
}

function findById(id){
    return db('artwork').select('id','images').where({id}).first();
}

function remove(id){
    return db('artwork').where('id', id).del();
}

function update(id, changes){
    return db('artwork').where('id', id).update(changes).then(count => {
        count > 0 ? this.find(id) : null
    });
}

module.exports = router;