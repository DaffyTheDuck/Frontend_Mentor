import React, {useState} from 'react';
import './App.scss';
import SearchIP from './components/SearchIP';
import Map from './components/Map';


export default function App() {

  const [IPInfo, setIPInfo] = useState({
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

  return (
    <div className='app-parent'>
      <div className='top-div'>
        <p className='title'>IP Address Tracker</p>
        <SearchIP getIPData={setIPInfo}/>
      </div>
      <div className='map-div'>
        <Map lat={IPInfo.location.latitude} lng={IPInfo.location.longitude}/>
      </div>
    </div>
  );
}

