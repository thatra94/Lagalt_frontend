export const ACTION_APPLICATIONS_FETCH_BY_ID = "applications:FETCHING_BY_ID";
export const ACTION_APPLICATIONS_SET_BY_ID = "applications:SET_BY_ID";
export const ACTION_APPLICATIONS_ADD =  "applications:ADD";
export const ACTION_APPLICATIONS_ADD_SUCCESS =  "applications:ADD_SUCCESS";
export const ACTION_APPLICATIONS_ERROR = "applications:ERROR";
export const ACTION_APPLICATIONS_UPDATE =  "applications:ACCEPT";
export const ACTION_APPLICATIONS_UPDATE_SUCCESS =  "applications:ACCEPT_SUCCESS"

export const applicationsFetchingByIdAction = payload => ({
    type: ACTION_APPLICATIONS_FETCH_BY_ID,
    payload
})

export const applicationsSetByIdAction = payload => ({
    type: ACTION_APPLICATIONS_SET_BY_ID,
    payload
})

export const applicationsUpdateAction = payload => ({
    type: ACTION_APPLICATIONS_UPDATE,
    payload
})


export const applicationsUpdateSuccessAction = payload => ({
    type: ACTION_APPLICATIONS_UPDATE_SUCCESS,
    payload
})


export const applicationsAddAction  = payload => ({
    type: ACTION_APPLICATIONS_ADD,
    payload
})

export const applicationsAddSuccessAction  = payload => ({
    type: ACTION_APPLICATIONS_ADD_SUCCESS,
    payload
})
export const applicationsErrorAction = payload => ({
    type: ACTION_APPLICATIONS_ERROR,
    payload
})
