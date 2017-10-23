import AuthReducer from '../../reducers/auth';

test('should set uid of user on login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123'
    };

    const state = AuthReducer({}, action);

    expect(state.uid).toBe(action.uid);
});

test('should clear uid of user on logout', () => {
    const initState = {
        uid: '123'
    };

    const action = {
        type: 'LOGOUT'
    };

    const state = AuthReducer(initState, action);
    expect(state).toEqual({});
});