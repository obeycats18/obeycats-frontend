import React, { useEffect } from 'react'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

import Boards from '../index'

import {getBoards, replaceTask} from 'redux/reducers/boards'

export default compose(
    connect(
        
        ({boards} ) => ({boards: boards.boards}),
        {getBoards, replaceTask}
        
    ),
    withRouter
)(props => {

    let idProject = props.location.search.split('=')[1]

    const {boards, getBoards} = props

    useEffect(() => {
        getBoards(idProject)
    }, [boards.length])

    return <Boards idProject={idProject} {...props}/>

})