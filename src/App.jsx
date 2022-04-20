import { useState, useEffect } from 'react';
import { LaunchItem } from './components/LaunchItem';
import logo from './assets/logo-spacex.png'
import * as API from "./services/launches";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.fetchAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <img src={logo} width={300} />
      <h1>SpaceX Missions</h1>
      {launches.map((launch) => (
        <LaunchItem key={launch.flight_number} {...launch}/>
      ))}
    </>
  );
}
