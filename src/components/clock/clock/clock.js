import React, {Component} from 'react';
import './clock.css'
class Clock extends Component {

    appendZero = (number) => number > 9 ? number : '0' + number.toString();
    getTwelveHour = (hour) => hour <= 12 ? hour : hour % 12;
    getMeridium = (hour) => hour < 12 ? 'AM' : 'PM';

    state =  {
        hours : '',
        mins : '',
        secs : '',
        merd : ''
    };

    componentDidMount() {
        setInterval(() => {
            this.showClock();
        }, 1000);
    }

    showClock = () => {
       let date = new Date();
       let hour = date.getHours();
       let min = this.appendZero(date.getMinutes());
       let secs = this.appendZero(date.getSeconds());

       let twelveHour = this.appendZero(this.getTwelveHour(hour));
       let meridium = this.getMeridium(hour);
 
       this.setState({
            hours : twelveHour,
            mins : min,
            secs : secs,
            merd : meridium
        });

    }
    
    render() {
        return (
        <div className="align">{this.state.hours + ':' + this.state.mins + ':' + this.state.secs + ' ' + this.state.merd}</div>    
        );
    }

}

export default Clock;