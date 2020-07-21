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
        merd : '',
        todayDate:''
    };

    componentDidMount() {
        setInterval(() => {
            this.showClock();
        }, 1000);
    }

    showClock = () => {
       let tempDate = new Date();
       var date = (tempDate.getMonth()+1)+ '-' + tempDate.getDate()+ '-' +tempDate.getFullYear() ;
     
       let hour = tempDate.getHours();
       let min = this.appendZero(tempDate.getMinutes());
       let secs = this.appendZero(tempDate.getSeconds());

       let twelveHour = this.appendZero(this.getTwelveHour(hour));
       let meridium = this.getMeridium(hour);
 
       this.setState({
            hours : twelveHour,
            mins : min,
            secs : secs,
            merd : meridium,
            todayDate : date
        });

    }
    
    render() {
        return (
        <div className="align">
            <div>
            {this.state.todayDate}
            </div>
            <div>
             {this.state.hours + ':' + this.state.mins + ':' + this.state.secs + ' ' + this.state.merd} 
            </div>
        </div>    
        );
    }

}

export default Clock;