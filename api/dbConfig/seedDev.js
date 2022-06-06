const db = require('./init');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/dev_seeds.sql').toString();
// const seeds = fs.readFileSync(__dirname + './db/migrations/2_seed.sql').toString();

// db.query(setup, () => console.log('dev db setup'))
db.query(seeds, () => console.log('dev db seeded'))
