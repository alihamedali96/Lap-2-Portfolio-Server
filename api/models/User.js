const db = require ('../dbConfig');
module.exports = class User {
    constructor(data){
        this.id = data.id;   
        this.name = data.name;
        this.userName = data.userName;
        this.password = data.password;
    };

    static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM users;')
                const users = result.rows.map(user => ({ id: user.id, name: user.name }))
                resolve(users);
            } catch (err) {
                reject("Error retrieving all users")
            }
        })
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query('SELECT * FROM users WHERE id = $1;', [ id ]);
                let user = new User(userData.rows[0]);
                resolve(user);
            } catch (err) {
                reject('user not found');
            };
        });
    };

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING id', [ this.id ]);
                resolve(`user ${result.id} was deleted`)
            } catch (err) {
                reject('User could not be deleted')
            }
        })   
    };

    static create(name,password){
        return new Promise (async (resolve, reject) => {
            try {
                const userExistsTest = await db.query(`SELECT count(*) FROM users WHERE name = ($1)`, [name])
                // console.log("userExistsTest",userExistsTest.rows[0].count > 0)
                if (userExistsTest.rows[0].count > 0){
                    throw new Error('Username already exists')
                }
                const timestamp = Date.now();
                const create_date = new Date(timestamp).toLocaleString();
                let userData = await db.query(`INSERT INTO users (name,password,create_date) VALUES ($1, $2, $3) RETURNING *;`, [ name,password,create_date ]);
                let newUser = new User(userData.rows[0]);
                resolve (newUser);
            } catch (err) {
                console.log(err.message)
                reject(`User could not be created: ${err.message}`);
                 }
        });
    }; 
};
