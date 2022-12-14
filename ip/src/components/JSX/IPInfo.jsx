import React from 'react';
import '../SCSS/IPInfo.scss';

export default function IPInfo(props) {
    return (
        <div className='ip_info_div'>
            <div className='ip_address'>
                <p>IP ADDRESS</p>
                <span className='ip_add'>{props.ipInfo.ip}</span>
            </div>
            <div className='vertical-line'/>
            <div className='ip_location'>
                <p>LOCATION</p>
                <span className='address'>{props.ipInfo.location.city}, {props.ipInfo.location.region}</span>
            </div>
            <div className='vertical-line'/>
            <div className='ip_timezone'>
                <p>TIMEZONE</p>
                <span className='tz'>GMT {props.ipInfo.location.timezone}</span>
            </div>
            <div className='vertical-line'/>
            <div className='ip_isp'>
                <p>ISP</p>
                <span className='isp'>{props.ipInfo.isp}</span>
            </div>
        </div>
    )
}
