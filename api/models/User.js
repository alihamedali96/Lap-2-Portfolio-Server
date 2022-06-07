const db = require ('../dbConfig');
module.exports = class Users {
    constructor(data){
        this.id = data.id;   
        this.name = data.name;
        this.userName = data.userName;
        this.password = data.password;
        this.create_date = data.create_date;

    };
    
    static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM users;')
                const users = result.rows.map(a => ({ id: a.id, name: a.name }))
                resolve(users);
            } catch (err) {
                reject("Error retrieving all users")
            }
        })
    };

    
    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let authorData = await db.query('SELECT * FROM users WHERE id = $1;', [ id ]);
                let author = new Users(userData.rows[0]);
                resolve(users);
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



    static create(name){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query('INSERT INTO users (name) VALUES ($1) RETURNING *;', [ name ]);
                let author = new User (usersData.rows[0]);
                resolve (user);
            } catch (err) {
                reject('User could not be created');
            };
        });
    }; 

    //wip







   
};