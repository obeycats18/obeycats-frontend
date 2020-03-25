import React from 'react';

import { ProjectClient, ProjectPM, ProjectDeveloper } from 'components/Protected'; 


export default () => {
    return (
        <>
            <ProjectClient /> 
            <ProjectPM/>
            <ProjectDeveloper/>
        </>
     )
}