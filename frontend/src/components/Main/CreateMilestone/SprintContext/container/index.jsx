import React from 'react';

import {connect} from 'react-redux'

import SprintContext from '../';

import {fetchUsers} from 'redux/reducers/users'

const ContextContainer = props => {
    return (
        <SprintContext {...props}/>
    );
};

export default connect( ({users}) => ({users: users.users}), {fetchUsers})(ContextContainer);