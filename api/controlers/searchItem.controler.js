const {ItemService} = require('../../db').default;
module.exports = async (ctx)=>{
    const {weightFrom,weightTo, itemType,price} = ctx.query;
    const items = await ItemService({type:itemType,price})
        .weightBetween(weightFrom,weightTo)
        .getMany();
    if(!items)
    {
        console.log("Items Not Found")
    }
    ctx.status = 200;
    ctx.body = {items}
}
