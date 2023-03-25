import React, { useEffect, useState } from 'react';

import './Timer.css';

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 31, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="img-bg">

            <div className="timer flex justify-items-center" role="timer" >
                <div className="col-4">
                    <div className="box">
                        <p className='text-3xl font-semibold' id="day">{days < 10 ? "0" + days : days}</p>
                        <span className="text font-medium">Days</span>
                    </div>
                </div>
                <div className="col-4">
                    <div className="box">
                        <p className='text-3xl font-semibold' id="hour">{hours < 10 ? "0" + hours : hours}</p>
                        <span className="text font-medium">Hours</span>
                    </div>
                </div>
                <div className="col-4">
                    <div className="box">
                        <p className='text-3xl font-semibold' id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
                        <span className="text font-medium">Minutes</span>
                    </div>
                </div>

                <div className="col-4">
                    <div className="box">
                        <p className='text-3xl font-semibold' id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
                        <span className="text font-medium">Seconds</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Timer;