import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <button onClick={props.startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

const mappedComponent = connect(undefined, mapDispatchToProps)(Header);

export { Header, mappedComponent as default }