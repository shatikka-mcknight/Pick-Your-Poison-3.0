const db = require('../config/connection');
const { User, Drink } = require('../models');
// import drink seed JSON from other file

db.once('open', async () => {
  await Drink.deleteMany({});
  // Drink bulk create from the seed JSON that was imported

  console.log('all done!');
  process.exit(0);
});
