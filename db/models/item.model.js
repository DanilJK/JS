"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemType = void 0;
const mongoose_1 = require("mongoose");
const itemSchema = new mongoose_1.Schema({
    type: {
        type: String,
        default: 'default',
        enum: ['fruits', 'vegatables', 'meat', 'drinks', 'car', 'default']
    },
    name: {
        type: String,
        default: 'Snigana',
    },
    weight: {
        type: Number,
        default: 60,
    },
    price: {
        type: Number,
        default: 1000,
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
itemSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
var itemType;
(function (itemType) {
    itemType["fruits"] = "fruits";
    itemType["vegatables"] = "vegatables";
    itemType["meat"] = "meat";
    itemType["drinks"] = "drinks";
    itemType["car"] = "car";
    itemType["default"] = "default";
})(itemType = exports.itemType || (exports.itemType = {}));
exports.default = mongoose_1.model('Item', itemSchema);
