
export type TActionWithPayload<T, P> = {
    type: T,
    payload: P
}

export type TActionTypeOnly<T> = {
    type: T
}

export function createAction<T extends string, P>(type: T, payload: P):TActionWithPayload<T, P>

export function createAction<T extends string>(type: T, payload: void):TActionTypeOnly<T>

export function createAction<T extends string, P>(type: T, payload: P){
    return {type, payload}
}