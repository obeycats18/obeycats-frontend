import React, { useEffect }  from 'react' 

import CreateForm from '../index'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {withFormik} from 'formik'

import {projectSchema} from 'validations/project'

import {fetchUsers} from 'redux/reducers/users'
import {createProject, deleteProject} from 'redux/reducers/projects'
import {getAllTeams} from 'redux/reducers/teams'
import {initBoards} from 'redux/reducers/boards'


const mapStateToProps = ({users, projects, teams}) => {
    return {
        users: users.users, 
        idProject: projects.idProject, 
        statusCreating: projects.statusCreating,
        teams: teams.teams
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        fetchUsers, 
        createProject, 
        deleteProject,
        getAllTeams,
        initBoards
    }),
    withFormik({
    
        validationSchema: projectSchema,
    
        handleSubmit: ( values, {setSubmitting, props}) => {
            let buttonName = values.buttonName
            console.log(values)

            switch(buttonName) {
                case 'next' : 
                    props.createProject(values).then( (data) => {
                        setSubmitting(false)
                        if(data.status === 200){
                            props.history.push('/tasks/add')
                            props.initBoards(data.id)
                        }
                    })
                    
                break

                case 'create' : 
                    props.createProject(values).then( (status) => {
                        setSubmitting(false)
                        if(status === 200) {
                            props.history.push('/')
                            window.localStorage.removeItem('idProject')
                            window.localStorage.removeItem('idTeam')

                        }
                    })
                break

                case 'cancle' : props.history.push('/')
                break

                default: props.history.push('/')
                    
            }
        }
    })
    
)( (props) => {

    useEffect(() => {
        props.fetchUsers()
        props.getAllTeams()
    }, []) //fetchUsers, props.users.lenght, props.teams.length
    return (
        <CreateForm {...props}/>
    )
})