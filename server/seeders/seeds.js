const data = require('../connection/connection');
const {Stories} = require('./storiesSeed');
const {Profile} = require('./profileSeed');

data.once("open", async () => {
    try {
        await Stories();
        await Profile();
        console.log('All data seeded');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
});