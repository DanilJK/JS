import { model, Schema,Document} from "mongoose";

const itemSchema:Schema = new Schema({
    type: {
        type: String,
        default: 'default',
        enum: ['car', 'blonde', 'redhair', 'mistress', 'gey', 'threesome', 'default']
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
    milf = 'car',
    blonde = 'blonde',
    redhair = 'redhair',
    mistress ='mistress',
    gey = 'gay',
    threesome = 'threesome',
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
