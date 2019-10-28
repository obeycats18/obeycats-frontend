import {userAPI} from 'api/userAPI'

const SET_USERS = "SET_USERS";

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USERS : 
            return {
                ...state,
                users: action.users.map( (item) => {
                    return {
                        label: `${item.last_name}  ${item.first_name}`,
                        value: item._id
                    }
                } )
            }
        default: 
            return state
    }
}

export const setUsers = (users) => ({ type: SET_USERS, users })

export let fetchUsers = () => {
    return dispatch => {
        return userAPI.getUsers( ).then( (data) => {   
            if(data.status === 200){
                console.log(data)
                dispatch(setUsers ( data.users ) );
            } if(data.status === 404) {
                dispatch(setUsers ( { value: '', message: 'Пользователей не найдено!' } ) );
            }
        })
        .catch( err => {console.log(err);
        } )
    }  
}

export default usersReducer