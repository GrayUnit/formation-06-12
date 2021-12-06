import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
    id!: number;
    ca!: number;
    name!: string;
    state = StateClient.ACTIVE;

    constructor(obj?: Partial<Client>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }
}
