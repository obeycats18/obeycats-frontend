import React from 'react' 

import PopupCreateForm from './PopupCreateForm/container'
import PopupCreateMilestone from './PopupCreateMilestone/container'

import {connect} from 'react-redux'

import {fetchUsers} from 'redux/reducers/users'

class PopupCreate extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
    }

    renderModal () {
        switch (this.props.idModal) {
            case 1:
                return <PopupCreateForm {...this.props}/>
            case 2:
                return <PopupCreateMilestone {...this.props}/>
            default:
                break;
        }
    }

    render() {
        return (
            this.renderModal()
        )
    }
}

export default connect((state) => state.users, {fetchUsers})(PopupCreate);