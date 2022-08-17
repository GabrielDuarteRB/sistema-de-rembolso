const INITIAL_STATE = {
    refund: [],
    refundId: [],
    isLoading: false,
};


const refundReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOADING_TRUE':
            return {
                ...state,
                isLoading: true
            }
        case 'LOADING_FALSE':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_REFUND':
            return {
                ...state,
                refund: action.refund,
                refundId: [],
                isLoading: false,
            }
        case 'GET_REFUND_BY_ID':
            return {
                ...state,
                refundId: action.refundId,
                isLoading: false
            }
            
        default:
            return state
    }
}

export default refundReducer