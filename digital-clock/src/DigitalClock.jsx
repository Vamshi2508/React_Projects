import React,{useEffect,useState} from 'react';
import './DigitalClock.css'

function DigitalClock () {

    const [time,setTime] = useState(new Date());

    useEffect(()=> {
        const setIntervalId=setInterval(()=>{
            setTime(new Date())
        },1000)
    },[]);

    function spanTime(){
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
        const meridian=hours>=12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return padZero(hours)+":"+padZero(minutes)+":"+padZero(seconds)+" "+meridian;

    }

    function padZero(number){
        return number<10?"0"+number:""+number;
    }


    return (
        <div>
            <div className="clock-container">
                <span className="clock">{spanTime()}</span>
            </div>
        </div>
    )

}

export default DigitalClock