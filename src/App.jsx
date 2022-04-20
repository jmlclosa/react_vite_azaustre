import { useState, useEffect } from 'react';
import * as API from "./services/launches";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.fetchAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <h1>SpaceX Missions</h1>
      <ul>
        <li>First element</li>
        {launches.map((launch) => (
          <li key={launch.flight_number}>{launch.mission_name}</li>
        ))}
      </ul>
    </>
  );
}
