"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_model_1 = __importDefault(require("../models/item.model"));
class ItemService {
    constructor(query) {
        this.query = {};
        if (!query) {
            this.query = {};
        }else {
            this.query = query;
        }
    }
    getOne(fields = '', query = {}) {
        if (query) {
            Object.assign(query, this.query);
        }
        return item_model_1.default.findOne(query || this.query, fields).exec();
    }
    getMany(fields = '', query = {}) {
        if (query) {
            Object.assign(query, this.query);
        }
        return item_model_1.default.find(query || this.query, fields).exec();
    }
    create(query = {}) {
        if (query) {
            Object.assign(query, this.query);
        }
        return (new item_model_1.default(query || this.query)).save();
    }
    exists(query = {}) {
        if (query) {
            Object.assign(query, this.query);
        }
        return item_model_1.default.exists(query || this.query);
    }
    weightBetween(from, to) {
        this.query.weight = { $gte: parseFloat(from), $lte: parseFloat(to) };
        return this;
    }
}
exports.default = (query) => new ItemService(query);
