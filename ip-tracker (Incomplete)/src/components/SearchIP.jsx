/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './SearchIP.scss';
import axios from 'axios';
import DataCard from './DataCard';

export default function SearchIP(props) {

    // Constants
    const API_URL = 'https://geo.ipify.org/api/v2/country,city'
    const API_KEY = 'at_KsAhwXa3XMaMTOFuVuUX9lG8zvcHw'
    const [IPAddress, setIPAddress] = useState('');
    const [IPData, setIPData] = useState({
        ip: '',
        location: {
            region: '',
            city: '',
            latitude: '',
            longitude: '',
        },
        timezone: '',
        isp: '',
    });
    const [isDataReceived, setIsDataReceived] = useState(false);

    // Handlers
    const IPHandler = (e) => {
        setIPAddress(e.target.value);
    }
    const submitHandler = async () => {
        const response = await axios.get(API_URL, {
            params: {
                apiKey: API_KEY,
                ipAddress: IPAddress,
            }
        }).then(res => {
            setIPData({
                ip: res.data.ip,
                location: {
                    region: res.data.location.region,
                    city: res.data.location.city,
                    latitude: res.data.location.lat,
                    longitude: res.data.location.lng,
                },
                timezone: res.data.location.timezone,
                isp: res.data.isp,
            });
        }).catch(err => {
            console.log(err);
        });
        setIsDataReceived(true);
    }

    useEffect(() => {
        submitHandler();
    }, []);

    // Pass data to App component
    const submitToApp = () => {
        props.getIPData({
            ip: IPData.ip,
            location: {
                region: IPData.location.region,
                city: IPData.location.city,
                latitude: IPData.location.latitude,
                longitude: IPData.location.longitude,
            },
            timezone: IPData.timezone,
            isp: IPData.isp,
        });
    }

    useEffect(() => {
        if (isDataReceived) {
            submitToApp();
        }
    }, [isDataReceived]);



    return (
        <>
            <div className='input-div'>
                <input 
                        type='text' 
                        placeholder='Search for any IP address or domain' 
                        onChange={IPHandler}
                        value={IPAddress}
                        className='input-field'
                    />
                <button 
                    className='search-button'
                    type='submit'
                    onClick={submitHandler}
                    value='>'
                >{'>'}</button>
            </div>
            <div className='info-card'>
                <DataCard
                    ip={IPData.ip}
                    region={IPData.location.region}
                    city={IPData.location.city}
                    timezone={IPData.timezone}
                    isp={IPData.isp}
                />
            </div>
        </>
    );
}
