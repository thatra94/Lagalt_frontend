export const ACTION_INDUSTRIES_FETCH = "industries:FETCH";
export const ACTION_INDUSTRIES_SET = "industries:SET";
export const ACTION_INDUSTRIES_ERROR = "industries:ERROR";

export const industriesFetchAction = payload => ({
    type: ACTION_INDUSTRIES_FETCH,
    payload
})

export const industriesSetAction = payload => ({
    type: ACTION_INDUSTRIES_SET,
    payload
})

export const industriesErrorAction = payload => ({
    type: ACTION_INDUSTRIES_ERROR,
    payload
})