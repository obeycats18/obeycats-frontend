import React from 'react'
import { Modal } from 'antd';

const Popup = props => {

    return (
        <Modal
          {...props}
        >
            {props.children}
        </Modal>
    )
}

export default Popup