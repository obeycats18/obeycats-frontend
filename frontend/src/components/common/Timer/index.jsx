import React, {useState} from 'react';
import ms from 'pretty-ms';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.state = {
            days: 0,
            hours: 0,
            month: 0,
            time_up:""
        }
        this.x = null
        this.deadline = null
    }
    count () {        
        var now = new Date().getTime();
        var t = new Date(this.deadline - now);
        var month = t.getMonth();
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.setState({days, month, hours, })
        if (t < 0) {
                clearInterval(this.x);
                this.setState({ days: 0, minutes: 0, hours: 0, seconds: 0, time_up: "TIME IS UP" })
            }
    }
    componentDidMount() {
        this.deadline = new Date(this.props.dateFinish).getTime();
 
        this.x = setInterval(this.count, 1000);
    }
    
    render() {
        const { days, seconds, hours, minutes, time_up } = this.state
        return ( 
            <div> 

            <h1>Countdown Clock</h1>
            <div id="clockdiv">
            <div>
                <span className="days" id="day">{days}</span>
                <div className="smalltext">Days</div>
                
            </div>
            <div>
                <span className="hours" id="hour">{hours}</span>
                <div className="smalltext">Hours</div>
                
            </div>
            <div>
                <span className="minutes" id="minute">{minutes}</span>
                <div className="smalltext">Minutes</div>
                
            </div>
            <div>
                <span className="seconds" id="second">{seconds}</span>
                <div className="smalltext">Seconds</div>
                
            </div>
            </div>
            
            <p id="demo">{time_up}</p>
            </div>
        )
    }
}
export default Timer