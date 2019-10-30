import React from 'react' 

import PopupCreateForm from './PopupCreateForm'
import PopupCreateMilestone from './PopupCreateMilestone'

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
        // console.log(this.props)
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

export default compose(
    connect(({users, projects}) => ({users: users.users, idProject: projects.idProject}), {fetchUsers, createProject, createMilestone}),
    withFormik({
        // enableReinitialize: true,
        mapPropsToValues: (props) => ({
            idProject: props.idProject,
            isNoReturn: false
        }),
    
        validationSchema: projectSchema,
    
        handleSubmit: ( values, {setSubmitting, props}) => {
            console.log(props)
            let idModal = props.idModal;
            switch (props.idModal) {
                // eslint-disable-next-line no-lone-blocks
                case 1: {
                    props.createProject(values).then(() => {
                        setSubmitting(false)
                        props.switchModal(++idModal)
                    })     
                }
                break;
                // eslint-disable-next-line no-lone-blocks
                case 2:{
                    values.idProject = props.idProject;
                    props.createMilestone(values).then( () => {
                        setSubmitting(false)     
                    })
                    
                }
                break;
                
                default:
                    break;
            } 
        }
    })
    
)(PopupCreate)