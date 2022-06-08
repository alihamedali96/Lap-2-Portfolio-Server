const app = require('./server');

const port = process.env.PORT || 3000;

const timestamp = Date.now();
const create_date = new Date(timestamp).toLocaleString();

app.listen(port, () => console.log(`Express now departing from port ${port}!
Port open datetime: ${create_date}`))


