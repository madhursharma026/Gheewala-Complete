const SAVELOGINDETAILS = "SAVELOGINDETAILS";
const LOGOUT = "LOGOUT";
const COWGHEEINCREMENT = "COWGHEEINCREMENT";
const COWGHEEDECREMENT = "COWGHEEDECREMENT";
const BUFFALOGHEEINCREMENT = "BUFFALOGHEEINCREMENT";
const BUFFALOGHEEDECREMENT = "BUFFALOGHEEDECREMENT";
const CHECKOUTDONE = "CHECKOUTDONE";


// Action creators
export const SaveLoginDetails = (userId, email, address, name, role) => ({
    type: SAVELOGINDETAILS,
    payload: {
        userId: userId,
        email: email,
        address: address,
        name: name,
        role: role
    }
})

export const Logout = () => ({
    type: LOGOUT,
})

export const CowGheeincrement = () => ({
    type: COWGHEEINCREMENT,
})

export const CowGheedecrement = () => ({
    type: COWGHEEDECREMENT,
})

export const BuffaloGheeincrement = () => ({
    type: BUFFALOGHEEINCREMENT,
})

export const BuffaloGheedecrement = () => ({
    type: BUFFALOGHEEDECREMENT,
})

export const CheckoutDone = () => ({
    type: CHECKOUTDONE,
})

// Initial state
const initialState = {
    UserDetail: "",
    BuffaloGhee: 0,
    CowGhee: 0
}

// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case COWGHEEINCREMENT:
            return {
                ...state,
                // counter: 1,
                UserDetail: state.UserDetail,
                BuffaloGhee: state.BuffaloGhee,
                CowGhee: state.CowGhee + 1
            }
        case COWGHEEDECREMENT:
            return {
                ...state,
                UserDetail: state.UserDetail,
                BuffaloGhee: state.BuffaloGhee,
                CowGhee: state.CowGhee - 1
            }
        case BUFFALOGHEEINCREMENT:
            return {
                ...state,
                UserDetail: state.UserDetail,
                BuffaloGhee: state.BuffaloGhee + 1,
                CowGhee: state.CowGhee
            }
        case BUFFALOGHEEDECREMENT:
            return {
                ...state,
                UserDetail: state.UserDetail,
                BuffaloGhee: state.BuffaloGhee - 1,
                CowGhee: state.CowGhee
            }
        case SAVELOGINDETAILS:
            return {
                ...state,
                UserDetail: [{ "userId": action.payload.userId, "email": action.payload.email, "address": action.payload.address, "name": action.payload.name, "role": action.payload.role }],
                BuffaloGhee: state.BuffaloGhee,
                CowGhee: state.CowGhee
            }
        case LOGOUT:
            return {
                ...state,
                UserDetail: [],
                BuffaloGhee: state.BuffaloGhee,
                CowGhee: state.CowGhee
            }
        case CHECKOUTDONE:
            return {
                ...state,
                UserDetail: state.UserDetail,
                BuffaloGhee: 0,
                CowGhee: 0
            }
        default:
            return state
    }
}

export default rootReducer

