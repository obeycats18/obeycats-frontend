import React from 'react';

import './style.scss'

const Popup = ({visible, children}) => {
    return (
        
        <div className="popup">
            {
                (visible)
                    ? (children)
                    : null
            }
            
        </div>
    );
};

export default Popup;