import React from 'react'

import Countdown, {zeroPad} from 'react-countdown-now';

 const ReactTimer = props => {

    const {
      project
    } = props

    const deadline = new Date(project.dateToFinish);

    const renderer = ({ hours, days, minutes }) => {
        
      return (
          <div className='timer-block'>
              <div className='timer-block__wrapper'>
                  <div className='timer-block__day'>{zeroPad(days)} </div> 
                  <span className='title'>дней</span>
              </div>
              <div className="seperator">:</div>
              <div className='timer-block__wrapper'>
                  <div className='timer-block__hours'>{zeroPad(hours)}  </div>
                  <span className='title'>часов</span>
              </div>
              <div className="seperator">:</div>
              <div className='timer-block__wrapper'>
                  <div className='timer-block__hours'>{zeroPad(minutes)}  </div>
                  <span className='title'>минут</span>
              </div>
          </div>
      )
      
    };

    return (
      <div className="project-wrapper__block timer">
          <h4>До сдачи проекта</h4>
          <Countdown
              date={deadline}
              renderer={renderer}
          />
          
      </div>
    )
}

export default ReactTimer 