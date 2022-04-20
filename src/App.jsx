import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
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
        <Card key={launch.flight_number} title={launch.mission_name} className="relative mb-3">
          <Tag className="absolute top-50 right-0" value={launch.launch_success ? "Success" : "Failure"} severity={launch.launch_success ? "success" : "danger"} />
          <i className="pi pi-calendar"></i> {launch.launch_year}
        </Card>
      ))}
    </>
  );
}
