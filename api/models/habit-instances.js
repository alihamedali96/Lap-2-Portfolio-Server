const db = require ('../dbConfig');
module.exports = class HabitInstance {
    constructor(data){
        this.id = data.id;
        this.habit_id = data.habit_id;   
        this.completed = data.completed;
        this.create_date = data.create_date;
        this.due_date = data.due_date;
    };
    
    static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM habit_instances;')
                const users = result.rows.map(a => ({ id: a.id, name: a.name }))
                resolve(Habit);
            } catch (err) {
                reject("Error retrieving all habit instances")
            }
        })
    };

    //////////////////////////////////////////////
    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query('SELECT * FROM habit_instances WHERE id = $1;', [ id ]);
                let habit = new HabitInstance(habitData.rows[0]);
                resolve(habit);
            } catch (err) {
                reject('habbit instances not found');
            };
        });
    };


    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.query('DELETE FROM habit_instances WHERE id = $1 RETURNING id', [ this.id ]);
                resolve(`habit ${result.id} was deleted`)
            } catch (err) {
                reject('habit instances could not be deleted')
            }
        })   
    };



    static create(name){
        return new Promise (async (resolve, reject) => {
            try {
                let habitsData = await db.query('INSERT INTO habit_instances (name) VALUES ($1) RETURNING *;', [ name ]);
                let habits = new HabitInstance (habitsData.rows[0]);
                resolve (habits);
            } catch (err) {
                reject('habit insances could not be created');
            };
        });
    }; 

    //targeting habit instances for a particular user
    static habitInstancesRoutes (id){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query(`SELECT * FROM habit_instances JOIN users ON users.id = habits.user_id WHERE users.id = $1 RETURNING *;`,[id]);
                let habits = result.rows.map(a => ({ id: a.id, name: a.name }))
                resolve(habits);
            } catch (err) {
                reject('habbit instances not found');
            };
        });
    };

   


}
