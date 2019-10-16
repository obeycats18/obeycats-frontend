import {notification} from 'antd'

export let openNotification = (type, title, text, duration = 3) => {

    notification.config({
        duration,
    });

    notification[type]({
        message: title,
        description: text
    })
}