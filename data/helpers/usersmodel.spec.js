const Users = require('./login-route-helper');
const db = require('../dbConfig');
it ('should set a testing environment', () => {
    expect(process.env.NODE_ENV).toBe('test');
});

describe('user model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });
    describe('insert', () => {
        it('should add a user to the database', async ()=>{
            const record = await db('users');
            expect(record).toHaveLength(0);

            await Users.add({username: "Gabe", password: "test"});
        });
    });
    it ('should add the provided peep to database', async () => {
        let peep = await Users.add({username:"daisy", password: "bestTLever"});
        expect(peep.username).toBe('daisy');

        peep = await Users.add({username: "amanda", password: "panda"});
        expect(peep.username).toBe('amanda');

        const people = await db('users');
        expect(people).toHaveLength(2)
    })
})