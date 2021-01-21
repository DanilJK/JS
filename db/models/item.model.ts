import { model, Schema,Document} from "mongoose";

const itemSchema:Schema = new Schema({
    type: {
        type: String,
        default: 'default',
        enum: ['fruits', 'vegatables', 'meat', 'drinks', 'car', 'default']
    },
    name: {
        type: String,
        default: 'car',
    },
    weight: {
        type: Number,
        default: 60,
    },
    price:{
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



itemSchema.pre<ItemBaseDocument>('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

export enum itemType {
    car = 'car',
    fruits = 'fruits',
    vegatables = 'vegatables',
    meat ='meat',
    drinks = 'drinks',
    default = 'default',
}
export interface Item  {
    type:itemType,
    name:string,
    weight: number,
    price: number,
}
export interface ItemBaseDocument extends Document,  Item {
    updatedAt:number,
    createdAt:number,
}

export default model<ItemBaseDocument>('Item', itemSchema);
