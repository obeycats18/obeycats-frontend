import React from 'react' 

import PopupCreateForm from '../../CreateProject/PopupCreateForm'
import PopupCreateMilestone from './PopupCreateMilestone'
import PopupCreateSuccess from './PopupCreateSuccess'

import Home from 'components/Main/Home/container';

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withFormik} from 'formik'

import {fetchUsers} from 'redux/reducers/users'
import {createProject, createMilestone, deleteProject} from 'redux/reducers/projects'

import {projectSchema} from '../../CreateProject/validation'

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
        createMilestone,
        deleteProject
    }),
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
                    
                    if(buttonName === 'next'){
                        props.createProject(values).then( (data) => {
                            setSubmitting(false)
                            if(data.status === 200){
                                props.switchModal(++idModal)
                            }
                        })
                    }   
                        
                    if(buttonName === 'create'){
                        props.createProject(values).then( (data) => {
                        setSubmitting(false)
                            if(data.status === 200){
                                props.switchModal(3)
                                setTimeout( () => props.showModal(false), 4000)
                            }
                        })
                    }

                    if(buttonName === 'cancle'){
                        
                        props.showModal(false);
                    }
                    
                     
                }
                break;
                // eslint-disable-next-line no-lone-blocks
                case 2:{
                    values.idProject = props.idProject;
                    if(buttonName === 'finish'){
                        props.createMilestone(values).then( (data) => {
                            setSubmitting(false)
                            if(data.status === 200){
                                props.switchModal(3)
                                setTimeout( () => props.showModal(false), 4000)
                            }
                        })
                    }
                   

                    if(buttonName === 'cancle'){
                        props.deleteProject( values.idProject).then( (data) => {
                        if(data.status === 200){
                            console.log('success')
                            setTimeout( () => props.showModal(false), 1000)
                            }
                        })
                    }
                }
                break;
                default:
                    break;
            } 
        }
    })
    
)(PopupCreate)