export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (newUser) => {
    return {
        type:UPDATE_USER,
        payload:{
            user:newUser
        }
    }
}