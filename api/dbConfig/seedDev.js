const db = require("./init");
const fs = require("fs");

const seeds = fs.readFileSync(__dirname + "/dev_seeds.sql").toString();
// const seeds = fs.readFileSync(__dirname + './db/migrations/2_seed.sql').toString();

// db.query(setup, () => console.log('dev db setup'))
db.query(seeds, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log("dev db seeded");
    console.log(res);
  }
});

// .then(db.query('select * from users')).catch(err => console.log(err));
