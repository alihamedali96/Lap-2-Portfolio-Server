const db = require ('../dbConfig');
module.exports = class Habit {
    constructor(data){
        this.id = data.id;
        this.user_id = data.user_id;   
        this.habit_name = data.habit_name;
        this.frequency = data.frequency;
        this.create_date = data.create_date;
    };
    
    static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM habits;');
                const habits = result.rows.map(habit => new Habit(habit));
                resolve(habits);
            } catch (err) {
                reject("Error retrieving all habits")
            }
        })
    };

    //////////////////////////////////////////////
    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query('SELECT * FROM habits WHERE id = $1;', [ id ]);
                let habit = new Habit(habitData.rows[0]);
                resolve(habit);
            } catch (err) {
                reject('user not found');
            };
        });
    };


    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.query('DELETE FROM habits WHERE id = $1 RETURNING id', [ this.id ]);
                resolve(`habit ${result.id} was deleted`)
            } catch (err) {
                reject('habits could not be deleted')
            }
        })   
    };



    static create(name){
        return new Promise (async (resolve, reject) => {
            try {
                let habitsData = await db.query('INSERT INTO habits (name) VALUES ($1) RETURNING *;', [ name ]);
                let habits = new habit (habitsData.rows[0]);
                resolve (habits);
            } catch (err) {
                reject('habit could not be created');
            };
        });
    }; 

    //targeting habits for a particular user
    static findAllHabitsByUserId(id_val){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query(`SELECT habits.* FROM habits JOIN users ON users.id = habits.user_id WHERE users.id = $1;`,[id_val]);
                let habits = habitData.rows.map(habit => new Habit(habit))
                resolve(habits);
            } catch (err) {
                reject('user not found');
            };
        });
    };

}
