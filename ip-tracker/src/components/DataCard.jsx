import React from 'react';
import Card from './Card';
import './DataCard.scss'

export default function DataCard(props) {
    return (
        <>
            <div className='data-parent'>
                <Card className="data-card">
                    <div className='ip-info'>
                        <span className='ip-title'>IP ADDRESS</span>
                        <span className='ip'>{props.ip}</span>
                    </div>
                    <div className='hr_'/>
                    <div className='loc-info'>
                        <span className='loc-title'>LOCATION</span>
                        <span className='loc'>{props.city}, {props.region}</span>
                    </div>
                    <div className='hr_'/>
                    <div className='tz-info'>
                        <span className='tz-title'>TIMEZONE</span>
                        <span className='tz'>UTC {props.timezone}</span>
                    </div>
                    <div className='hr_'/>
                    <div className='isp-info'>
                        <span className='isp-title'>ISP</span>
                        <span className='isp'>{props.isp}</span>
                    </div>
                </Card>
            </div>
        </>
    )
}
