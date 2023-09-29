import React, { useEffect, useState } from "react";
import Eventitem from "./Eventitem";

export default function Eventlist() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/events")
      .then(response => response.json())
      .then(data => {
        setEvents(data);
      });
  }, [])

  return (
    <div className="container" id="eventtable">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Year</th>
              <th scope="col">Album </th>
              <th scope="col">Band</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              events.map(event => (
                <Eventitem event={event} key={event.id} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}