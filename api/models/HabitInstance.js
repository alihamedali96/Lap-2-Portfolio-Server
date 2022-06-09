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

    // return habit instances for a particular habit
    static findAllInstancesByHabitId(id_val){
        return new Promise (async (resolve, reject) => {
            try {
                let instanceData = await db.query(`SELECT habit_instances.* FROM habit_instances JOIN habits ON habits.id = habit_instances.habit_id WHERE habits.id = $1;`,[id_val]);
                let instances = instanceData.rows.map(instance => new HabitInstance(instance))
                resolve(instances);
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

    update(boolean){
        return new Promise (async (resolve, reject) => {
            try {
                console.log(this.id,boolean)
                await db.query('UPDATE habit_instances SET completed = $1 WHERE habit_instances.id = $2;', [ boolean , this.id ]);
                resolve(`Habit instance ${this.id} has been updated`);
            } catch (err) {
                reject(new Error(`Habit instance ${this.id} was not updated`));
            };
        });
    }; 

}
