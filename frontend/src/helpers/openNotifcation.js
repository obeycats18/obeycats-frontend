import {notification} from 'antd'

export let openNotification = (type, title, text) => {

    notification.config({
        duration: 3,
    });

    notification[type]({
        message: title,
        description: text
    })
}