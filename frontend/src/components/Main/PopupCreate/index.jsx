import React from 'react' 

import PopupCreateForm from './PopupCreateForm/container'
import {connect} from 'react-redux'

import {fetchUsers} from 'redux/reducers/users'

class PopupCreate extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
    }

    render() {
        return <PopupCreateForm {...this.props}/>
    }
}

export default connect((state) => state.users, {fetchUsers})(PopupCreate);