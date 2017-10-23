import { login, logout } from '../../actions/auth';

test('should login user', () => {
    const action = login();

    expect(action.type).toBe('LOGIN');
    expect(action.uid).toBeFalsy();
});

test('should logout user', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
