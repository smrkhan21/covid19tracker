import React, { useEffect, useState } from 'react';
import './Covid.css';

function Covid() {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData)
        setData(actualData.statewise[0]);

    }
    useEffect(() => {
        getCovidData()
    }, []);
    return (
        <>
            <p className='blink'> &#128308; Live</p>
            <h2>COVID19 CORONAVIRUS TRACKER 2022</h2>
            <div className='card_main'>
                <div className='card country'>
                    <h1><span>our</span> Country</h1>
                    <h1>INDIA</h1>
                </div>
                <div className='card recovered'>
                    <h1><span>total</span> Recovered</h1>
                    <h1>{data.recovered}</h1>
                </div>
                <div className='card confirmed'>
                    <h1><span>total</span> Confirmed</h1>
                    <h1>{data.confirmed}</h1>
                </div>
                <div className='card daaths'>
                    <h1><span>total</span> Deaths</h1>
                    <h1>{data.deaths}</h1>
                </div>
                <div className='card active'>
                    <h1><span>total</span> Active</h1>
                    <h1>{data.active}</h1>
                </div>
                <div className='card lastupdated'>
                    <h1><span>last</span> Updated</h1>
                    <h1>{data.lastupdatedtime}</h1>
                </div>
            </div>

        </>
    );
}

export default Covid;
