import React, {useState} from 'react';
import '../SCSS/Home.scss';
import Background from './Background';
import IPInfo from './IPInfo';
import MapInfo from './MapInfo';
import Search from './Search';

export default function Home() {
    
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

    const get_data = (data) => {
        setIpInfo({
            ip: data.ip,
            location: {
                city: data.location.city,
                region: data.location.region,
                timezone: data.location.timezone,
                lat : data.location.lat,
                lng : data.location.lng
            },
            isp: data.isp
        });
    }

    return (
        <div className='Home'>
            <div className='top-div'>
                <Background />
                <Search onReceiveData={get_data}/>
            </div>
            <div className='middle-div'>
                <IPInfo ipInfo={ipInfo}/>
            </div>
            <div className='bottom-div'>
                <MapInfo ipInfo={ipInfo}/>
            </div>
        </div>
    )
}
