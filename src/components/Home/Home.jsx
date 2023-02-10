import React from 'react';


import './Home.css';
import Navbar from '../Navbar/Navbar';
import Timer from './Timer/Timer';

const Home = () => {
    return (
    <div className="home" >
        
        <Navbar />
        <div className="landing flex flex-col justify-center items-center content-center">
            <h1 className="font-bold">ODS</h1>
            <h3 className='subtitle uppercase font-medium'>Para cumplir con la meta de 2023</h3>
            <Timer />
        </div>
        <button className='init uppercase'>Iniciar</button>
    </div>
    )
}

export default Home;