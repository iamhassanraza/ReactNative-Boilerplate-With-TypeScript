import { Action } from 'redux';

export interface IAction<P> extends Action<number> {
    type: number,
    payload?: P
    error?: string

}