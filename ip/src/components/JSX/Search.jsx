import React, {useState, useEffect} from 'react'
import Button from '../UI/Button';
import '../SCSS/Search.scss';
import arrowImage from '../../assets/icon-arrow.svg';
import axios from 'axios';

export default function Search(props) {


    const URL = "https://geo.ipify.org/api/v2/country,city?";

    // useStates
    const [ipAddress, setIpAddress] = useState('');
    const [ipInfo, setIpInfo] = useState({
        ip: '',
        location: {
            city: '',
            region: '',
            timezone: '',
            lat : '',
            lng : ''
        },
        isp: ''
    });
    // check if data is received
    const [isDataReceived, setIsDataReceived] = useState(false);

    const getData = (e) => {
        e.preventDefault();
        setIpAddress(e.target.value);
    }

    const getIPInfo = async () => {
        // fetch data using axios and set the ipInfo
        const response = await axios.get(URL, {
            params: {
                apiKey: process.env.REACT_APP_API_KEY,
                ipAddress: ipAddress
            }
        }).then(response => {
            setIpInfo({
                ip: response.data.ip,
                location: {
                    city: response.data.location.city,
                    region: response.data.location.region,
                    timezone: response.data.location.timezone,
                    lat : response.data.location.lat,
                    lng : response.data.location.lng
                },
                isp: response.data.isp
            });
        }).catch(error => {
            console.log(error);
        });
        setIpAddress('');
        setIsDataReceived(isDataReceived => !isDataReceived);
    }

    useEffect(() => {
        getIPInfo();
    }, []);

    useEffect(() => {
        if(isDataReceived) {
            props.onReceiveData(ipInfo);
            setIsDataReceived(isDataReceived => !isDataReceived);
        }
    }, [isDataReceived]);

    return (
        <div className='search'>
            <input 
                type='text' 
                placeholder='Search for any IP address or domain' 
                className='search_text'
                value={ipAddress}
                onChange={getData}
            />
            <Button 
                onClick={getIPInfo} 
                className="btn-class"
            >
                <img src={arrowImage} alt="arrow" className="arrow"/>
            </Button>
        </div>
    )
}
