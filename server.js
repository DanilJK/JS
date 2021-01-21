const db = require('./db').default;
const config = require('./config');
console.log(db);
const m = require('./db/models/item.model');
console.log(config)
const mongoose = require('mongoose');

db.init(`${config.database.connectionString}`).then(async ()=>{
   // console.log(mongoose)
    await db.ItemService({name:'test'}).create();
    const items = await db.ItemService().getMany('name weight');
    console.log(items);


});