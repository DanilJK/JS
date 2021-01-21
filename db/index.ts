import ItemService from "./sevices/item.service";
import mongoose from "mongoose";

const state = {
    isInit: false
};
const init = (connectionString: string): Promise<unknown> => {
    if (!state.isInit)
        return mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});
    return Promise.resolve(mongoose)
};

export default {
    init,
    ItemService
};