import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => {
    return (
        <div>
            <button onClick={props.startLogin}>login</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

const mappedComponent = connect(undefined, mapDispatchToProps)(LoginPage);

export { LoginPage, mappedComponent as default };
