const db = require ('../dbConfig');
module.exports = class User {
    constructor(data){
        this.id = data.id;   
        this.name = data.name;
        this.username = data.username;
        this.email = data.email;
        this.password = data.password;
        this.create_date = data.create_date;

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

    static create(data){
        return new Promise (async (resolve, reject) => {
            try {
               
                console.log("data",data);
                const { name , username, email , password } = data
                console.log(name,username,email,password);

                const usernameExistsTest = await db.query(`SELECT count(*) FROM users WHERE username = ($1)`, [username])
                // console.log("userExistsTest",userExistsTest.rows[0].count > 0)
                if (usernameExistsTest.rows[0].count > 0){
                    throw new Error('Username already exists')
                }

                const timestamp = Date.now();
                const create_date = new Date(timestamp).toLocaleString();

                let userData = await db.query(`
                INSERT INTO users (name,username,email,password,create_date) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [ name,username,email,password,create_date ]);

                let newUser = new User(userData.rows[0]);
                resolve (newUser);
            } catch (err) {
                console.log(err.message)
                reject(`User could not be created: ${err.message}`);
                 }
        });
    }; 

    //wip







   
};
