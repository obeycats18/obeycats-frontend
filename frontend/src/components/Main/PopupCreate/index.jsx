import React from 'react' 

import PopupCreateForm from './PopupCreateForm'
import PopupCreateMilestone from './PopupCreateMilestone'
import PopupCreateSuccess from './PopupCreateSuccess'

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
            case 3:
                return <PopupCreateSuccess/>
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
            let buttonName = values.buttonName
            let {idModal} = props;
            switch (idModal) {
                // eslint-disable-next-line no-lone-blocks
                case 1: {
                    props.createProject(values).then( (data) => {
                        setSubmitting(false)
                        if(buttonName === 'next'){
                            if(data.status === 200){
                                props.switchModal(++idModal)
                            }
                        }
                        if(buttonName === 'create'){
                            if(data.status === 200){
                                props.switchModal(3)
                                setTimeout( () => props.showModal(false), 4000)
                            }
                        }
                        
                        
                    })     
                }
                break;
                // eslint-disable-next-line no-lone-blocks
                case 2:{
                    values.idProject = props.idProject;
                    props.createMilestone(values).then( (data) => {
                        setSubmitting(false)
                        if(buttonName === 'finish'){
                            if(data.status === 200){
                                props.switchModal(3)
                                setTimeout( () => props.showModal(false), 4000)
                            }
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