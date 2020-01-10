import React from 'react'

import {Statistic} from 'antd'
const {Countdown} = Statistic;

 class ReactTimer extends React.Component {
    constructor(props) {
        super(props);
        this.timerRef = React.createRef();
      }

      
      render() {
        console.log(this.timerRef)
          return (
            <div ref={this.timerRef} className="project-wrapper__block timer">
                <h4>До сдачи проекта</h4>
                <Countdown  
                    value={this.props.deadline} 
                    format="DD:MM:HH"
                    valueStyle={{paddingRight: '15px'}}
                    
                    />
            </div>
          )
      }
}

export default ReactTimer 