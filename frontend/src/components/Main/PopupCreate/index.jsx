import React from 'react' 

import PopupCreateForm from './PopupCreateForm'
import PopupCreateMilestone from './PopupCreateMilestone'
import Home from 'components/Main/Home/container';

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withFormik} from 'formik'

import {fetchUsers} from 'redux/reducers/users'
import {createProject, createMilestone} from 'redux/reducers/projects'

import {projectSchema} from './validation'

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
                return <Home/> 
        }
    }

    render() {
        return (
            this.renderModal()
        )
    }
}

const mapStateToProps = ({users, projects}) => {
    return {
        users: users.users, 
        idProject: projects.idProject, 
        statusCreating: projects.statusCreating
    }
}

export default compose(
    connect(mapStateToProps, {
        fetchUsers, 
        createProject, 
        createMilestone}),
    withFormik({
        mapPropsToValues: (props) => ({
            idProject: props.idProject,
            isNoReturn: false
        }),
    
        validationSchema: projectSchema,
    
        handleSubmit: ( values, {setSubmitting, props}) => {
            console.log(values)
            let idModal = props.idModal;
            switch (idModal) {
                // eslint-disable-next-line no-lone-blocks
                case 1: {
                    props.createProject(values).then( (data) => {
                        setSubmitting(false)
                        if(data.status === 200){
                            props.switchModal(++idModal)
                        }
                        
                    })     
                }
                break;
                // eslint-disable-next-line no-lone-blocks
                case 2:{
                    values.idProject = props.idProject;
                    props.createMilestone(values).then( (data) => {
                        setSubmitting(false)
                        if(data.status === 200){
                            props.switchModal(idModal)
                        }
                    })
                    
                }
                break;
                default:
                    break;
            } 
        }
    })
    
)(PopupCreate)