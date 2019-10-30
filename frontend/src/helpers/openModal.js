import React from 'react';
import { Modal } from 'antd';


export let openInfoModal = ( {title, text, classname, width} ) => {
    Modal.info({
        title: title,
        content: (
            <div>
              <p>
                {text}
              </p>
            </div>
          ),
          width: width,
          className: classname
    })
}