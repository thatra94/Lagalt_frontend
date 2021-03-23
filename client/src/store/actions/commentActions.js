export const ACTION_COMMENT_FETCH_BY_ID = "comment:FETCHING_BY_ID";
export const ACTION_COMMENT_SET_BY_ID = "comment:SET_BY_ID";
export const ACTION_COMMENT_ERROR = "comment:ERROR";
export const ACTION_COMMENT_ADD = "comment:ADD";
export const ACTION_COMMENT_ADD_SUCCESS = "comment:ADD_SUCCESS";


export const commentFetchingByIdAction = payload => ({
    type: ACTION_COMMENT_FETCH_BY_ID,
    payload
})

export const commentSetByIdAction = payload => ({
    type: ACTION_COMMENT_SET_BY_ID,
    payload
})

export const commentErrorAction = payload => ({
    type: ACTION_COMMENT_ERROR,
    payload
})

export const commentAddAction  = payload => ({
    type: ACTION_COMMENT_ADD,
    payload
})

export const commentAddSuccessAction  = payload => ({
    type: ACTION_COMMENT_ADD_SUCCESS,
    payload
})

