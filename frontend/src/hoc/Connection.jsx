import React, { Component } from 'react';

import {Icon} from 'antd'

import './style.scss'

export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false
    }

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }


    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('//google.com', {
              mode: 'no-cors',
              })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing)
              });
            }).catch(() => this.setState({ isDisconnected: true }) )
          }, 2000);
        return;
      }

      return this.setState({ isDisconnected: true });
    }

    render() {
      const { isDisconnected } = this.state;
      return (
        <>
          {
              isDisconnected 
                ? <div className='hoc-wrapper'>
                    <div className='internet-error'>
                        <Icon type="api" style={{ fontSize: '32px', color: '#FF5364', marginBottom: 30}}/>
                        <h1>Ошибка соединения</h1>
                        <p>Проверте подключение к интернет</p>
                    </div>
                </div>
                :<ComposedComponent {...this.props} /> 
          }
        </>
      );
    }
  }

  return NetworkDetector;
}