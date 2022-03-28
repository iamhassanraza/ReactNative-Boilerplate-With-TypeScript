import { Action } from 'redux';

export interface IAction<P> extends Action<string> {
    type: string,
    payload?: P
    error?: string

}