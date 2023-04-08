import { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import '../CSS/Announcements.css';

function Announcements() {
  let ann_data = ['ann 1', 'ann 2', 'ann 3'];
  const [showAllanns, setShowAllanns] = useState(false);

  const toggleShowAllanns = () => {
    setShowAllanns(!showAllanns);
  };

  return (
    <div className='ann-container'>
      <div className='ann-hero' onClick={toggleShowAllanns}>
        Announcements
        <span className='ann-icon' onClick={toggleShowAllanns}>
          <FaChevronCircleDown
            className={
              showAllanns
                ? 'rotate-icon rotate-both-icon '
                : 'rotate-both-icon '
            }
          />
        </span>
      </div>
      <div className={`ann-list ${showAllanns ? 'ann-list-show' : ''}`}>
        {ann_data.map((data, index) => (
          <div key={index}>{data}</div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;
