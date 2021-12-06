import { StateClient } from "../enums/state-client";

export interface ClientI {
    id: number;
    ca: number;
    name: string;
    state: StateClient;
}
