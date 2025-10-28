import React,{useState,useRef,useEffect} from 'react'
import './StopWatch.css';
function StopWatch(){

    const[isRunning,setIsRunning] = useState(false);
    const[elapsedTime,setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
        intervalIdRef.current=setInterval(()=>
            {setElapsedTime(Date.now()-startTimeRef.current)},10);
        }

        return ()=>{
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current=Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }

    function displayTime(){
        let hours = Math.floor(elapsedTime/(60*60*1000));
        let minutes =Math.floor((elapsedTime/(60*1000))%60);
        let seconds =Math.floor((elapsedTime/1000)%60);
        let milliseconds =Math.floor((elapsedTime%1000)/10);

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`
    }

    function pad(number){
        number=number.toString().padStart(2,'0');
        return number;
    }

    return (
        <div className='container'>
            <h1 >{displayTime()}</h1>
            <button className="start" onClick={start}>Start</button>
            <button className="stop" onClick={stop}>Stop</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default StopWatch