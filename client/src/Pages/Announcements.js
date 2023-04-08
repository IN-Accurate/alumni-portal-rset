import React from 'react';
import '../CSS/Announcements.css';
function Announcements() {
  let ann_data = ['ann 1', 'ann 2', 'ann 3'];
  return (
    <div className='ann-cont'>
      <div>Announcements</div>
      {ann_data &&
        ann_data.length > 0 &&
        ann_data.map((data, index) => <div key={index}>{data}</div>)}
    </div>
  );
}

export default Announcements;
