import { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import '../CSS/Events.css';

function Events() {
  let event_data = ['event 1', 'event 2', 'event 3'];
  const [showAllEvents, setShowAllEvents] = useState(false);

  const toggleShowAllEvents = () => {
    setShowAllEvents(!showAllEvents);
  };

  return (
    <div className='event-container'>
      <div className='event-hero' onClick={toggleShowAllEvents}>
        Events
        <span className='event-icon' onClick={toggleShowAllEvents}>
          <FaChevronCircleDown
            className={
              showAllEvents
                ? 'rotate-icon rotate-both-icon '
                : 'rotate-both-icon '
            }
          />
        </span>
      </div>
      <div className={`event-list ${showAllEvents ? 'event-list-show' : ''}`}>
        {event_data.map((data, index) => (
          <div key={index}>{data}</div>
        ))}
      </div>
    </div>
  );
}

export default Events;
