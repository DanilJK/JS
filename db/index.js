"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_service_1 = __importDefault(require("./sevices/item.service"));
const mongoose_1 = __importDefault(require("mongoose"));
const state = {
    isInit: false
};
const init = (connectionString) => {
    if (!state.isInit)
        return mongoose_1.default.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    return Promise.resolve(mongoose_1.default);
};
exports.default = {
    init,
    ItemService: item_service_1.default
};
