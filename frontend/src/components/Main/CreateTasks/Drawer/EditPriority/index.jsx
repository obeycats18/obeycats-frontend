import React from 'react';

import {Link} from 'react-router-dom'
import './style.scss'

const EditPriority = () => {
    return (
        <div className="edit-priority">
            <div className="description-section">
                <p>Приоритет</p>
            </div>
            
            <div className="priority-wrapper">
                <Link><div className="priority-block green"></div></Link>
                <Link><div className="priority-block yellow"></div></Link>
                <Link><div className="priority-block red"></div></Link>
            </div>

        </div>
    );
};

export default EditPriority;