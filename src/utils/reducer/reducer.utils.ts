import { AnyAction } from 'redux';

export type TActionWithPayload<T, P> = {
    type: T,
    payload: P
}

type Matchable<AC extends ()=> AnyAction> = AC & {
    type: ReturnType<AC>['type'],
    match(action: AnyAction): action is ReturnType<AC>
}

export function withMatcher<AC extends ()=> AnyAction & {type: string}>(actionCreator: AC):Matchable<AC>

export function withMatcher<AC extends (...args: any[])=> AnyAction & {type: string}>(actionCreator: AC):Matchable<AC>

export function withMatcher(actionCreator: Function){
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match: (action: AnyAction) => action.type === type
    })
}

export type TActionTypeOnly<T> = {
    type: T
}

export function createAction<T extends string, P>(type: T, payload: P):TActionWithPayload<T, P>

export function createAction<T extends string>(type: T, payload: void):TActionTypeOnly<T>

export function createAction<T extends string, P>(type: T, payload: P){
    return {type, payload}
}