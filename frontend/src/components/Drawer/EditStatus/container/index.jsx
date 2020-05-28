import React, {useEffect} from 'react' 

import {connect} from 'react-redux'

import {getBoards} from 'redux/reducers/boards'

import EditStatus from '../index'

export default connect(
    ({boards, projects}) => ({boards: boards.boards, idProject: projects.idProject}),
    {getBoards}
)(props => {

    
    // console.log(props)
    // useEffect(() => {
    //     props.getBoards(props.idProject)
    // })

    return <EditStatus {...props}/>
})