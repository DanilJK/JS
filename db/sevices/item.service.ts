import ItemModel, {ItemBaseDocument} from "../models/item.model";
// @ts-ignore
import {_FilterQuery} from "mongoose";

class ItemService {
    private query: _FilterQuery<ItemBaseDocument> = {};

    constructor(query: string | _FilterQuery<ItemBaseDocument> | null) {
        if (!query) {
            this.query = {};
        } else if (typeof query === 'string') {
            this.query._id = query;
        } else {
            this.query = query;
        }
    }

    getOne(fields: string = '*', query: _FilterQuery<ItemBaseDocument> = {}): Promise<ItemBaseDocument | null> {
        if (query) {
            Object.assign(query, this.query);
        }
        return ItemModel.findOne(query||this.query, fields).exec();
    }

    getMany(fields: string = '', query: _FilterQuery<ItemBaseDocument> = {}): Promise<ItemBaseDocument[] | null> {
        if (query) {
            Object.assign(query, this.query);
        }
        return ItemModel.find(query||this.query, fields).exec();
    }

    create(query: _FilterQuery<ItemBaseDocument> = {}): Promise<ItemBaseDocument | null> {
        if (query) {
            Object.assign(query, this.query);
        }
        return (new ItemModel(query||this.query)).save();
    }

    exists(query: _FilterQuery<ItemBaseDocument> = {}): Promise<boolean> {
        if (query) {
            Object.assign(query, this.query);
        }
        return ItemModel.exists(query||this.query);
    }

    weightBetween(from: number, to: number): ItemService {
        this.query.weight = {$gte: from, $lte: to};
        return this;
    }
}
export default (query: string | _FilterQuery<ItemBaseDocument> | null) => new ItemService(query);