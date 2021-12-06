import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI {
    tjmHt = 300;
    nbJours = 1;
    tva = 20;
    state = StateOrder.OPTION;
    id!: number;
    typePresta!: string;
    client!: string;
    comment!: string;

    constructor(obj?: Partial<Order>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }

    totalHt(): number {
        return this.nbJours * this.tjmHt;
    }
    totalTtc(): number {
        return this.totalHt() * (1 + this.tva / 100);
    }
}

